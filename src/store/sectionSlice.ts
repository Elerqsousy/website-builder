import { StateCreator } from 'zustand'

import { SectionInstance, SectionProps } from '@/types'

export type SectionsState = {
  sections: SectionInstance[]
  addSection: (type: string) => void
  deleteSection: (id: string) => void
  moveSection: (fromIndex: number, toIndex: number) => void
  editSection: (id: string, newProps: SectionProps) => void
  replaceSections: (newSections: SectionInstance[]) => void
}

export const createSectionsSlice: StateCreator<SectionsState> = set => ({
  sections: [],
  addSection: (type: string) => {
    let defaultProps: SectionProps = {}
    if (type === 'header') defaultProps = {}
    else if (type === 'hero') defaultProps = {}
    else if (type === 'footer') defaultProps = {}
    set((state: SectionsState) => ({
      sections: [
        ...state.sections,
        {
          id: `${type}-${Date.now()}`,
          type,
          props: defaultProps,
        },
      ],
    }))
  },
  deleteSection: (id: string) =>
    set((state: SectionsState) => ({
      sections: state.sections.filter(section => section.id !== id),
    })),
  moveSection: (fromIndex: number, toIndex: number) =>
    set((state: SectionsState) => {
      const updated = [...state.sections]
      const [moved] = updated.splice(fromIndex, 1)
      if (moved !== undefined) {
        updated.splice(toIndex, 0, moved)
      }
      return { sections: updated }
    }),
  editSection: (id: string, newProps: SectionProps) =>
    set((state: SectionsState) => ({
      sections: state.sections.map(section =>
        section.id === id ? { ...section, props: { ...section.props, ...newProps } } : section
      ),
    })),
  replaceSections: (newSections: SectionInstance[]) => set(() => ({ sections: newSections })),
})
