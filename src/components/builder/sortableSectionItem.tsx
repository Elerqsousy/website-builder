import React from 'react'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const SortableSectionItem: React.FC<{
  id: string
  idx: number
  sectionType: string
  isEditing: boolean
  onEdit: () => void
  onClose: () => void
  onDelete: () => void
  children: React.ReactNode
}> = ({ id, sectionType, isEditing, onEdit, onClose, onDelete, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging, isOver } =
    useSortable({ id })
  return (
    <li
      ref={setNodeRef}
      className={[
        'flex items-center gap-2 px-4 py-2 rounded transition-all duration-200 opacity-0 animate-fadeInSection',
        isDragging ? 'z-20 shadow-2xl scale-105 bg-white opacity-70' : 'z-10',
        isOver ? 'bg-blue-50 border-2 border-dashed border-blue-500' : '',
        'relative',
      ].join(' ')}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
        zIndex: isDragging ? 2 : 1,
        background: isOver ? '#e6f0fa' : undefined,
      }}
      aria-label={sectionType}
      {...attributes}
      {...listeners}
    >
      <span
        className="cursor-grab select-none text-lg"
        title="Drag to reorder. You can also use keyboard arrows."
        aria-label="Drag handle"
        tabIndex={-1}
      >
        ☰
      </span>
      <span className="font-medium flex-1">{sectionType}</span>
      <button
        onClick={onDelete}
        aria-label={`Delete ${sectionType}`}
        className="mr-1 min-w-8 min-h-8 rounded border border-transparent bg-white transition-colors text-base px-2 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-blue-500"
      >
        Delete
      </button>
      <button
        onClick={onEdit}
        aria-label={`Edit ${sectionType}`}
        className="mr-1 min-w-8 min-h-8 rounded border border-transparent bg-white transition-colors text-base px-2 hover:border-blue-500 hover:bg-blue-50 focus-visible:outline-blue-500"
      >
        Edit
      </button>
      {isEditing && (
        <div className="ml-4 max-h-[500px] opacity-100 transition-all duration-300 overflow-hidden">
          {children}
          <button
            onClick={onClose}
            className="mt-2 px-2 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </li>
  )
}

export default SortableSectionItem
