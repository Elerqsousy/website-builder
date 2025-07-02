import React, { useState } from 'react'

import { useSections } from '../../features/sections'
import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SectionEditor from './SectionEditor'

const Builder = () => {
  const { sections, addSection, deleteSection, moveSection, editSection } = useSections()
  const [editingId, setEditingId] = useState<string | null>(null)

  // Handler to replace all sections (for import)
  const handleImport = (importedSections: typeof sections) => {
    // This requires setSections to be exposed from the hook for full functionality.
    // For now, just alert and log.
    alert('Import is not fully implemented yet. Check console for imported data.')
    console.log(importedSections)
  }

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <SectionsLibrary onAddSection={addSection} />
        <ImportExportControls sections={sections} onImport={handleImport} />
      </div>
      <div style={{ flex: 2 }}>
        <h2>Page Layout</h2>
        <ul>
          {sections.map((section, idx) => (
            <li key={section.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
        <Preview sections={sections} />
      </div>
    </div>
  )
}

export default Builder
