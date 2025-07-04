import React from 'react'

type SectionType = {
  id: string
  name: string
}

const SECTIONS: SectionType[] = [
  { id: 'header', name: 'Header' },
  { id: 'hero', name: 'Hero' },
  { id: 'footer', name: 'Footer' },
]

type Props = {
  onAddSection: (sectionId: string) => void
}

const SectionsLibrary: React.FC<Props> = ({ onAddSection }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">Section Library</h2>
    <ul>
      {SECTIONS.map(section => (
        <li key={section.id} className="mb-3">
          <strong>{section.name}</strong>
          <button
            onClick={() => onAddSection(section.id)}
            className="mt-1 px-2 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            Add
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default SectionsLibrary
