'use client'

import React from 'react'

import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

import SectionPreview from './sectionPreview'

const selector = (state: SectionsState) => ({
  sections: state.sections,
})

const Preview: React.FC = () => {
  const { sections } = useSectionsStore(useShallow(selector))

  return (
    <div className=" animate animate-slideInPreview border border-gray-200 mt-4 min-h-[200px] rounded-lg">
      {sections.length === 0 && (
        <span className="text-gray-400 text-center py-8">No sections yet.</span>
      )}
      {sections.map(section => (
        <SectionPreview key={section.id} type={section.type} props={section.props} />
      ))}
    </div>
  )
}

export default Preview
