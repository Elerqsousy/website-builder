import React from 'react'

import type { SectionInstance } from '../../features/sections'

type Props = {
  sections: SectionInstance[]
  onImport: (imported: SectionInstance[]) => void
}

const ImportExportControls: React.FC<Props> = ({ sections, onImport }) => {
  const handleExport = () => {
    const dataStr = JSON.stringify(sections, null, 2)
    const blob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'website-layout.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = evt => {
      try {
        const imported = JSON.parse(evt.target?.result as string)
        if (Array.isArray(imported)) {
          onImport(imported)
        } else {
          alert('Invalid JSON structure.')
        }
      } catch {
        alert('Invalid JSON file.')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div style={{ marginTop: 24 }}>
      <button onClick={handleExport}>Export JSON</button>
      <label style={{ marginLeft: 12 }}>
        <input
          type="file"
          accept="application/json"
          style={{ display: 'none' }}
          onChange={handleImport}
        />
        <span style={{ cursor: 'pointer', color: '#0070f3', textDecoration: 'underline' }}>
          Import JSON
        </span>
      </label>
    </div>
  )
}

export default ImportExportControls
