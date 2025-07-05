'use client'

import React from 'react'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'
import { Section } from '@/types'
import { cn } from '@/utils/tw-clsx'

import SectionRendrer from './sectionRendrer'

type SectionPreviewProps = {
  section: Section
}

const selector = (state: SectionsState) => ({
  deleteSection: state.deleteSection,
  setEditingId: state.setEditingId,
})

const SectionPreview: React.FC<SectionPreviewProps> = ({ section }) => {
  const { deleteSection, setEditingId } = useSectionsStore(useShallow(selector))

  const { attributes, listeners, setNodeRef, transform, transition, isDragging, isOver } =
    useSortable({ id: section.id })

  const handlleDelete = () => {
    deleteSection(section.id)
  }

  const handleEdit = () => {
    setEditingId(section.id)
  }
  return (
    <div
      ref={setNodeRef}
      className={cn(
        'transition-all duration-100 animate-fadeInSection relative group/preview',
        isDragging
          ? 'z-20 shadow-2xl scale-105 bg-white opacity-70 cursor-grab'
          : 'z-10 cursor-grabbing',
        isOver && 'bg-blue-50 border-2 border-dashed border-blue-500'
      )}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
      }}
      aria-label={section.group}
      {...attributes}
      {...listeners}
    >
      <div className="gap-3 w-fit absolute top-2 right-2 hidden group-hover/preview:flex ">
        <button
          onClick={handlleDelete}
          aria-label={`Delete ${section.group}`}
          className="min-w-8 min-h-8 rounded border border-transparent bg-white transition-colors text-base px-2 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-blue-500"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          aria-label={`Edit ${section.group}`}
          className="min-w-8 min-h-8 rounded border border-transparent bg-white transition-colors text-base px-2 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-blue-500"
        >
          Edit
        </button>
      </div>
      <SectionRendrer section={section} />
    </div>
  )
}

export default SectionPreview
