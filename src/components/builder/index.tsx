import React from 'react'

import { cn } from '@/utils/tw-clsx'

import Preview from '../preview'
import SectionsLibrary from '../sections'

import EditingSection from './editingSection'

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
      </article>

      <article className="order-3 flex-1 md:order-2 md:flex-[5] lg:flex-[2]">
        <Preview />
      </article>

      <article
        className={cn('order-2 flex-1 h-full w-full md:order-2 lg:order-3 md:flex-[2] lg:flex-1')}
      >
        <EditingSection />
      </article>
    </main>
  )
}

export default Builder
