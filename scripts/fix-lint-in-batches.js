const { execSync } = require('child_process')
const { readdirSync, statSync } = require('fs')
const { join, resolve } = require('path')

// Configuration
const BATCH_SIZE = 5 // Number of files to fix in each batch
const ROOT_DIR = resolve(__dirname, '..')
const SRC_DIR = join(ROOT_DIR, 'src')

// Helper function to get all TS/TSX files recursively
function getAllTSFiles(dir, fileList = []) {
  const files = readdirSync(dir)

  files.forEach(file => {
    const filePath = join(dir, file)

    if (statSync(filePath).isDirectory()) {
      getAllTSFiles(filePath, fileList)
    } else if (/\.(ts|tsx)$/.test(file)) {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Get all TypeScript files
const allFiles = getAllTSFiles(SRC_DIR)
console.log(`Found ${allFiles.length} TypeScript files to process`)

// Process files in batches
let fixedCount = 0
let errorCount = 0

for (let i = 0; i < allFiles.length; i += BATCH_SIZE) {
  const batchFiles = allFiles.slice(i, i + BATCH_SIZE)
  const batchFilesStr = batchFiles.join(' ')

  try {
    console.log(
      `Fixing batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(allFiles.length / BATCH_SIZE)}`
    )
    execSync(`npm run lint:staged -- ${batchFilesStr}`, { stdio: 'inherit' })
    fixedCount += batchFiles.length
  } catch (error) {
    console.error(`Error fixing batch starting at index ${i}`)
    errorCount += batchFiles.length
  }

  console.log(
    `Progress: ${Math.min(i + BATCH_SIZE, allFiles.length)}/${allFiles.length} files processed`
  )
}

console.log('\nLinting fix summary:')
console.log(`✅ Fixed: ${fixedCount} files`)
console.log(`❌ Failed: ${errorCount} files`)
