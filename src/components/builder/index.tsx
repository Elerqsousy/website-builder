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
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SectionEditor from './SectionEditor'
import SortableSectionItem from './sortableSectionItem'

const selector = (state: SectionsState) => ({
  sections: state.sections,
  addSection: state.addSection,
  deleteSection: state.deleteSection,
  moveSection: state.moveSection,
  editSection: state.editSection,
  replaceSections: state.replaceSections,
})

const Builder = () => {
  const { sections, addSection, deleteSection, moveSection, editSection, replaceSections } =
    useSectionsStore(useShallow(selector))

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
