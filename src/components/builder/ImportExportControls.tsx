'use client'

import React from 'react'

import { useShallow } from 'zustand/shallow'

import { useToast } from '@/contexts/toast'
import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

const selector = (state: SectionsState) => ({
  sections: state.sections,
  replaceSections: state.replaceSections,
})
const ImportExportControls: React.FC = () => {
  const { sections, replaceSections } = useSectionsStore(useShallow(selector))

  const { toast } = useToast()

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
          replaceSections(imported)
          toast('Import successful!', 'success')
        } else {
          toast('Invalid JSON structure.', 'error')
        }
      } catch {
        toast('Invalid JSON file.', 'error')
      }
    }
    reader.readAsText(file)
  }

  return (
    <div className="mt-6">
      <button
        onClick={handleExport}
        className="mr-3 px-3 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors"
      >
        Export JSON
      </button>
      <label className="ml-3 cursor-pointer text-blue-600 underline">
        <input type="file" accept="application/json" className="hidden" onChange={handleImport} />
        <span className=" cursor-pointer font-[#0070f3] underline">Import JSON</span>
      </label>
    </div>
  )
}

export default ImportExportControls
