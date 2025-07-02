import React from 'react'

type SectionType = {
  id: string
  name: string
  description: string
}

const SECTIONS: SectionType[] = [
  { id: 'header', name: 'Header', description: 'A simple page header' },
  { id: 'hero', name: 'Hero', description: 'A large hero section' },
  { id: 'footer', name: 'Footer', description: 'A simple page footer' },
]

type Props = {
  onAddSection: (sectionId: string) => void
}

const SectionsLibrary: React.FC<Props> = ({ onAddSection }) => (
  <div>
    <h2>Section Library</h2>
    <ul>
      {SECTIONS.map(section => (
        <li key={section.id} style={{ marginBottom: 12 }}>
          <strong>{section.name}</strong>
          <div style={{ fontSize: 12, color: '#666' }}>{section.description}</div>
          <button onClick={() => onAddSection(section.id)}>Add</button>
        </li>
      ))}
    </ul>
  </div>
)

export default SectionsLibrary
