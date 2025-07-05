import { FC, useEffect, useState, useCallback } from 'react'

import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'
import { Section } from '@/types'
import { cn } from '@/utils/tw-clsx'

import RenderItem from './renderItem'

type EdetingItemProps = {
  editingItem: Section
}

const selector = (state: SectionsState) => ({
  editSection: state.editSection,
  setEditingItem: state.setEditingItem,
})

const EditableSections: FC<EdetingItemProps> = ({ editingItem }) => {
  const [item, setItem] = useState(editingItem.props)
  const { editSection, setEditingItem } = useSectionsStore(useShallow(selector))

  useEffect(() => {
    setItem(editingItem.props)
  }, [editingItem])

  const handleChange = (
    key: string,
    value: Section[keyof Section] | Section['props'][keyof Section['props']]
  ) => {
    setItem(prev => ({ ...prev, [key]: value }))
  }

  const handleClose = useCallback(() => {
    setEditingItem(null)
  }, [setEditingItem])

  const handleSave = () => {
    editSection(editingItem.id, { props: item } as Partial<Section>)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleClose)
    return () => {
      window.removeEventListener('beforeunload', handleClose)
    }
  }, [handleClose])

  return (
    <ul className="flex flex-col">
      {Object.entries(item).map(([key, value], i) => {
        return <RenderItem key={key + i} label={key} value={value} handleChange={handleChange} />
      })}
      <li className="flex justify-between items-center py-3 px-2">
        <button
          onClick={handleClose}
          className={cn(
            'px-3 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors',
            editingItem ? 'block' : 'hidden'
          )}
        >
          Close
        </button>
        <button
          onClick={handleSave}
          className={cn(
            'px-3 py-1 rounded border  border-gray-200  hover:bg-white hover:border-blue-500 bg-blue-50 transition-colors'
          )}
        >
          Save
        </button>
      </li>
    </ul>
  )
}

export default EditableSections
