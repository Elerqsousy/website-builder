'use client'

import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'
import { cn } from '@/utils/tw-clsx'

const selector = (state: SectionsState) => ({
  editingItem: state.editingItem,
  setEditingItem: state.setEditingItem,
  sections: state.sections,
})

const EditingSection = () => {
  const { editingItem, setEditingItem } = useSectionsStore(useShallow(selector))

  const handleClose = () => {
    setEditingItem(null)
  }
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h2 className="text-xl font-semibold mb-2">Page Layout</h2>
        <button
          onClick={handleClose}
          className={cn(
            'mr-3 px-3 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors',
            editingItem ? 'block' : 'hidden'
          )}
        >
          Close
        </button>
      </div>

      {!editingItem ? (
        <div>
          <span>No active items!</span>
          <p>
            Hover an item and try to move it around to change order or click on edit to start
            customizing section properties.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col">
          {Object.entries(editingItem).map(([key, value]) => {
            return (
              <p key={key}>
                {key}: {value.toString()}
              </p>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default EditingSection
