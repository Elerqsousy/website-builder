const { FlatCompat } = require('@eslint/eslintrc')
const js = require('@eslint/js')
const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
})

// Import TypeScript parser separately from the plugin
const typescriptParser = require('@typescript-eslint/parser')
const typescriptPlugin = require('@typescript-eslint/eslint-plugin')

// Get Next.js config first
const nextConfig = compat.extends('next/core-web-vitals')

module.exports = [
  js.configs.recommended,
  ...nextConfig,
  {
    files: ['**/*.{ts,tsx}'], // Only apply TypeScript parser to .ts/.tsx files
    // Avoid redefining plugins that might already be in the Next.js config
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // Add these options to make it work with newer TypeScript versions
        warnOnUnsupportedTypeScriptVersion: false,
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      // ESLint core rules
      'no-unused-vars': 'off',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // React rules
      'react/react-in-jsx-scope': 'off', // Ensure this is off for Next.js
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off', // Not needed in React 17+ and Next.js

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import rules for dependency arrangement
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules
            'external', // npm packages
            'internal', // paths marked as internal
            'parent', // parent directories imports
            'sibling', // sibling directories imports
            'index', // index imports
            'object', // object imports
            'type', // type imports
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  // Plain JavaScript configuration without TypeScript parser
  {
    files: ['**/*.{js,jsx}'],
    rules: {
      // ESLint core rules
      'no-unused-vars': 'warn',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Import rules
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    ignores: [
      // Build output
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      // Dependencies
      'node_modules/**',
      // Misc
      '.github/**',
      'public/**',
      '**/*.log',
      '**/*.lock',
      '**/*.md',
      '.vercel/**',
      '.vscode/**',
      // Configuration files (explicitly exclude .lintstagedrc.js)
      '.lintstagedrc.js',
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/*.config.cjs',
      'next.config.*',
      'postcss.config.*',
      'tailwind.config.*',
      'jest.config.*',
      'babel.config.*',
      'tsconfig.json',
      '.prettierrc',
      '.eslintrc.*',
      'scripts/**',
      // Cache
      '.eslintcache',
      '.cache/**',
      'coverage/**',
      // Environment variables
      '.env*',
      // TypeScript
      '**/*.tsbuildinfo',
      'next-env.d.ts',
      // Image files
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.png',
      '**/*.gif',
      '**/*.ico',
      '**/*.svg',
      // Font files
      '**/*.woff',
      '**/*.woff2',
      '**/*.eot',
      '**/*.ttf',
      '**/*.otf',
    ],
  },
]
