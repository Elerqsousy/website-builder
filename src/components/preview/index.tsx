'use client'

import React from 'react'

import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

import SectionPreview from './sectionPreview'

const selector = (state: SectionsState) => ({
  sections: state.sections,
  moveSection: state.moveSection,
})

const Preview: React.FC = () => {
  const { sections, moveSection } = useSectionsStore(useShallow(selector))
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor)
  )

  function handleDragEnd(event: DragEndEvent) {
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
        <div className=" animate animate-slideInPreview border border-gray-200 mt-4 min-h-[200px] rounded-lg">
          {sections.length === 0 && (
            <span className="text-gray-400 text-center py-8">No sections yet.</span>
          )}
          {sections.map(section => (
            <SectionPreview key={section.id} section={section} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  )
}

export default Preview
