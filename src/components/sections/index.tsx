'use client'

import React from 'react'

import { useShallow } from 'zustand/shallow'

import { useSectionsStore } from '@/store'
import { SectionsState } from '@/store/sectionSlice'

import sectionTemplate from './sectionTemplate'

const selector = (state: SectionsState) => ({
  addSection: state.addSection,
})

const SectionsLibrary: React.FC = () => {
  const { addSection } = useSectionsStore(useShallow(selector))

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Section Library</h2>
      <ul>
        {sectionTemplate.map(section => (
          <li key={section.id} className="mb-3">
            <strong className=" capitalize">{section.group}</strong>
            <button
              onClick={() => addSection(section)}
              className="mt-1 px-2 py-1 rounded border border-gray-200 bg-white hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SectionsLibrary
