'use client'

import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

import EditableSections from './editableSections'

const selector = (state: SectionsState) => ({
  editingItem: state.editingItem,
})

const EditingSection = () => {
  const { editingItem } = useSectionsStore(useShallow(selector))

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-2">Page Layout</h2>

      {!editingItem ? (
        <div className="flex flex-col ">
          <span>No active items!</span>
          <p>
            Hover an item and try to move it around to change order or click on edit to start
            customizing section properties.
          </p>
        </div>
      ) : (
        <EditableSections editingItem={editingItem} />
      )}
    </section>
  )
}

export default EditingSection
