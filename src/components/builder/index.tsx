'use client'
import React, { useState } from 'react'

import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import { useSections } from '../../hooks/sections'
import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SectionEditor from './SectionEditor'

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

const Builder = () => {
  const { sections, addSection, deleteSection, moveSection, editSection, replaceSections } =
    useSections()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [importSuccess, setImportSuccess] = useState(false)
  const [importError, setImportError] = useState(false)

  // DnD-kit sensors: add KeyboardSensor for accessibility
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  )

  // Handler to replace all sections (for import)
  const handleImport = (importedSections: typeof sections) => {
    try {
      if (Array.isArray(importedSections)) {
        replaceSections(importedSections)
        setImportSuccess(true)
        setTimeout(() => setImportSuccess(false), 2000)
      } else {
        setImportError(true)
        setTimeout(() => setImportError(false), 2000)
      }
    } catch {
      setImportError(true)
      setTimeout(() => setImportError(false), 2000)
    }
  }

  // DnD handler
  function handleDragEnd(event: import('@dnd-kit/core').DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id)
      const newIndex = sections.findIndex(s => s.id === over.id)
      moveSection(oldIndex, newIndex)
    }
  }

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <SectionsLibrary onAddSection={addSection} />
        <ImportExportControls sections={sections} onImport={handleImport} />
        {importSuccess && (
          <div className="animate-fadeInSuccess text-green-800 bg-green-50 border border-green-200 rounded px-4 py-2 my-2 font-medium">
            Import successful!
          </div>
        )}
        {importError && (
          <div className="animate-shakeError text-red-700 mt-2">Import failed: Invalid data.</div>
        )}
      </div>
      <div className="flex-2 flex-grow">
        <h2 className="text-xl font-semibold mb-2">Page Layout</h2>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
            <ul className="section-list flex flex-col gap-2" aria-label="Section list" role="list">
              {sections.map((section, idx) => (
                <SortableSectionItem
                  key={section.id}
                  id={section.id}
                  idx={idx}
                  sectionType={section.type}
                  isEditing={editingId === section.id}
                  onEdit={() => setEditingId(section.id)}
                  onClose={() => setEditingId(null)}
                  onDelete={() => deleteSection(section.id)}
                >
                  <SectionEditor section={section} onEdit={editSection} />
                </SortableSectionItem>
              ))}
            </ul>
          </SortableContext>
        </DndContext>
        <h2 className="text-xl font-semibold mt-8 mb-2">Live Preview</h2>
        <div className="animate-slideInPreview border border-gray-200 rounded-lg mt-4">
          <Preview sections={sections} />
        </div>
      </div>
    </div>
  )
}

export default Builder
