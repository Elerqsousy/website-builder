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

import { useSections } from '../../features/sections'
import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SectionEditor from './SectionEditor'
import './builder-animations.css'

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
      className={`section-list-item${isDragging ? ' moving' : ''}${isOver ? ' drag-over' : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
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
        style={{ cursor: 'grab', userSelect: 'none' }}
        title="Drag to reorder. You can also use keyboard arrows."
        aria-label="Drag handle"
        tabIndex={-1}
      >
        ☰
      </span>
      {sectionType}
      <button onClick={onDelete} aria-label={`Delete ${sectionType}`}>
        Delete
      </button>
      <button onClick={onEdit} aria-label={`Edit ${sectionType}`}>
        Edit
      </button>
      {isEditing && (
        <div style={{ marginLeft: 16 }}>
          {children}
          <button onClick={onClose}>Close</button>
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
    <div style={{ display: 'flex', gap: 32 }}>
      {' '}
      <div style={{ flex: 1 }}>
        {' '}
        <SectionsLibrary onAddSection={addSection} />{' '}
        <ImportExportControls sections={sections} onImport={handleImport} />{' '}
        {importSuccess && <div className="success-feedback">Import successful!</div>}
        {importError && (
          <div className="shake-error" style={{ color: '#c00', marginTop: 8 }}>
            Import failed: Invalid data.
          </div>
        )}
      </div>
      <div style={{ flex: 2 }}>
        <h2>Page Layout</h2>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
            <ul className="section-list" aria-label="Section list" role="list">
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
        <h2>Live Preview</h2>
        <div className="preview-animated">
          <Preview sections={sections} />
        </div>
      </div>
    </div>
  )
}

export default Builder
