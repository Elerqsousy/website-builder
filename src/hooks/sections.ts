import { useState } from 'react'

// Define section props types
export type HeaderProps = { title?: string }
export type HeroProps = { title?: string; description?: string }
export type FooterProps = { text?: string }

export type SectionProps = HeaderProps | HeroProps | FooterProps

export type SectionInstance = {
  id: string
  type: string
  props: SectionProps
}

// Section state management placeholder
export function useSections() {
  const [sections, setSections] = useState<SectionInstance[]>([])

  function addSection(type: string) {
    let defaultProps: SectionProps = {}
    if (type === 'header') defaultProps = {}
    else if (type === 'hero') defaultProps = {}
    else if (type === 'footer') defaultProps = {}
    setSections(prev => [
      ...prev,
      {
        id: `${type}-${Date.now()}`,
        type,
        props: defaultProps,
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

  // Add editSection for updating section props in a type-safe way
  function editSection(id: string, newProps: SectionProps) {
    setSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, props: { ...section.props, ...newProps } } : section
      )
    )
  }

  // NEW: setSections for full import functionality
  function replaceSections(newSections: SectionInstance[]) {
    setSections(newSections)
  }

  return { sections, addSection, deleteSection, moveSection, editSection, replaceSections }
}
