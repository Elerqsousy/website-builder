import React from 'react'

import { useSections } from '../../features/sections'
import Preview from '../preview'
import SectionsLibrary from '../sections'

const Builder = () => {
  const { sections, addSection, deleteSection, moveSection } = useSections()

  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <div style={{ flex: 1 }}>
        <SectionsLibrary onAddSection={addSection} />
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
