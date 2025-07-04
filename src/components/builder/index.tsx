import React from 'react'

import { ToastProvider } from '@/contexts/toast'

import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SortableSections from './sortableSections'

const Builder = () => {
  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <SectionsLibrary />
        <ToastProvider>
          <ImportExportControls />
        </ToastProvider>
      </div>
      <div className="flex-2 flex-grow">
        <h2 className="text-xl font-semibold mb-2">Page Layout</h2>
        <SortableSections />
        <h2 className="text-xl font-semibold mt-8 mb-2">Live Preview</h2>
        <Preview />
      </div>
    </div>
  )
}

export default Builder
