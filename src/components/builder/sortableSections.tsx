'use client'
import { useState } from 'react'

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

import SectionEditor from './SectionEditor'
import SortableSectionItem from './sortableSectionItem'

const selector = (state: SectionsState) => ({
  sections: state.sections,
  deleteSection: state.deleteSection,
  editSection: state.editSection,
  moveSection: state.moveSection,
})

const SortableSections = () => {
  const [editingId, setEditingId] = useState<string | null>(null)

  const { sections, deleteSection, editSection, moveSection } = useSectionsStore(
    useShallow(selector)
  )

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  )

  function handleDragEnd(event: import('@dnd-kit/core').DragEndEvent) {
    const { active, over } = event
    if (over && active.id !== over.id) {
      const oldIndex = sections.findIndex(s => s.id === active.id)
      const newIndex = sections.findIndex(s => s.id === over.id)
      moveSection(oldIndex, newIndex)
    }
  }

  return (
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
  )
}

export default SortableSections
