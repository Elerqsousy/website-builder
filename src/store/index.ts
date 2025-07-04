import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { createSectionsSlice, SectionsState } from './sectionSlice'

export const useSectionsStore = create<SectionsState>()(
  persist(
    (set, get, store) => ({
      ...createSectionsSlice(set, get, store),
    }),
    {
      name: 'sections-store',
    }
  )
)
