import { StateCreator } from 'zustand'

import { Section } from '@/types'

export type SectionsState = {
  sections: Section[]
  editingItem: Section | null
  setEditingItem: (item: Section | null) => void
  addSection: (sectionTemplate: Section) => void
  deleteSection: (id: string) => void
  moveSection: (fromIndex: number, toIndex: number) => void
  editSection: <T extends Section>(id: string, newProps: Partial<T>) => void
  replaceSections: (newSections: Section[]) => void
}

export const createSectionsSlice: StateCreator<SectionsState> = set => ({
  sections: [],
  editingItem: null,
  setEditingItem: item => {
    set({ editingItem: item })
  },
  addSection: sectionTemplate => {
    set(state => ({
      sections: [
        ...state.sections,
        {
          ...sectionTemplate,
          id: `${sectionTemplate.group}-${Date.now()}`,
        },
      ],
    }))
  },
  deleteSection: id =>
    set((state: SectionsState) => ({
      sections: state.sections.filter(section => section.id !== id),
      editingItem: state.editingItem?.id === id ? null : state.editingItem,
    })),
  moveSection: (fromIndex, toIndex) =>
    set((state: SectionsState) => {
      const updated = [...state.sections]
      const [moved] = updated.splice(fromIndex, 1)
      if (moved !== undefined) {
        updated.splice(toIndex, 0, moved)
      }
      return { sections: updated }
    }),
  editSection: (id, newProps) =>
    set((state: SectionsState) => ({
      sections: state.sections.map(section =>
        section.id === id ? ({ ...section, ...newProps } as Section) : section
      ),
    })),
  replaceSections: (newSections: Section[]) => set(() => ({ sections: newSections })),
})
