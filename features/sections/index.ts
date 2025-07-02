import { useState } from 'react'

// Section state management placeholder
export type SectionInstance = {
  id: string
  type: string
  props: Record<string, any>
}

export function useSections() {
  const [sections, setSections] = useState<SectionInstance[]>([])

  function addSection(type: string) {
    setSections(prev => [
      ...prev,
      {
        id: `${type}-${Date.now()}`,
        type,
        props: {},
      },
    ])
  }

  function deleteSection(id: string) {
    setSections(prev => prev.filter(section => section.id !== id))
  }

  function moveSection(fromIndex: number, toIndex: number) {
    setSections(prev => {
      const updated = [...prev]
      const [moved] = updated.splice(fromIndex, 1)
      if (moved !== undefined) {
        updated.splice(toIndex, 0, moved)
      }
      return updated
    })
  }

  // Placeholders for future features: edit
  return { sections, addSection, deleteSection, moveSection }
}
