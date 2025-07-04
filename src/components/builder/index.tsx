import React from 'react'

import { ToastProvider } from '@/contexts/toast'
import { cn } from '@/utils/tw-clsx'

import Preview from '../preview'
import SectionsLibrary from '../sections'

import ImportExportControls from './ImportExportControls'
import SortableSections from './sortableSections'

const Builder = () => {
  return (
    <main
      className={cn(
        'flex flex-col w-full px-4 max-h-screen gap-4 overflow-y-auto overflow-x-hidden mt-8',
        ' md:px-8 lg:px-16 xl:px-32 md:gap-8 md:flex-row'
      )}
    >
      <article className="order-1 flex-1 md:flex-[2] lg:flex-1">
        <SectionsLibrary />
        <ToastProvider>
          <ImportExportControls />
        </ToastProvider>
      </article>

      <article className="order-3 flex-1 md:order-2 md:flex-[5] lg:flex-[2]">
        <h2 className="text-xl font-semibold">Live Preview</h2>
        <Preview />
      </article>

      <article
        className={cn(
          'order-2 flex-1 h-full shadow-lg transition-transform w-full',
          ' md:h-auto md:shadow-none md:w-auto md:order-2 lg:order-3 md:flex-[2] lg:flex-1'
        )}
      >
        <div className="p-4 md:p-0">
          <h2 className="text-xl font-semibold mb-2">Page Layout</h2>
          <SortableSections />
        </div>
      </article>
    </main>
  )
}

export default Builder
