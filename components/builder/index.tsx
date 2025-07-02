'use client'
import React, { useState } from 'react'

import { useSections } from '../../features/sections'
import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SectionEditor from './SectionEditor'

import './builder-animations.css'

const Builder = () => {
  const { sections, addSection, deleteSection, moveSection, editSection, replaceSections } =
    useSections()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [importSuccess, setImportSuccess] = useState(false)
  const [importError, setImportError] = useState(false)

  // Handler to replace all sections (for import)
  const handleImport = (importedSections: typeof sections) => {
    try {
      if (Array.isArray(importedSections)) {
        replaceSections(importedSections)
        setImportSuccess(true)
        setTimeout(() => setImportSuccess(false), 2000)
      } else {
        setImportError(true)
        setTimeout(() => setImportError(false), 2000)
      }
    } catch {
      setImportError(true)
      setTimeout(() => setImportError(false), 2000)
    }
  }

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <SectionsLibrary onAddSection={addSection} />
        <ImportExportControls sections={sections} onImport={handleImport} />
        {importSuccess && <div className="success-feedback">Import successful!</div>}
        {importError && (
          <div className="shake-error" style={{ color: '#c00', marginTop: 8 }}>
            Import failed: Invalid data.
          </div>
        )}
      </div>
      <div style={{ flex: 2 }}>
        <h2>Page Layout</h2>
        <ul className="section-list">
          {sections.map((section, idx) => (
            <li
              key={section.id}
              className="section-list-item"
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              {section.type}
              <button onClick={() => deleteSection(section.id)}>Delete</button>
              <button
                onClick={() => moveSection(idx, idx - 1)}
                disabled={idx === 0}
                title="Move Up"
              >
                ↑
              </button>
              <button
                onClick={() => moveSection(idx, idx + 1)}
                disabled={idx === sections.length - 1}
                title="Move Down"
              >
                ↓
              </button>
              <button onClick={() => setEditingId(section.id)}>Edit</button>
              {editingId === section.id && (
                <div style={{ marginLeft: 16 }}>
                  <SectionEditor section={section} onEdit={editSection} />
                  <button onClick={() => setEditingId(null)}>Close</button>
                </div>
              )}
            </li>
          ))}
        </ul>
        <h2>Live Preview</h2>
        <div className="preview-animated">
          <Preview sections={sections} />
        </div>
      </div>
    </div>
  )
}

export default Builder
