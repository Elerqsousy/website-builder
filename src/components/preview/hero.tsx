import React from 'react'

import { HeroSection } from '@/types'

type PreviewSectionType = { section: HeroSection }

const HeroSectionPreview: React.FC<PreviewSectionType> = ({ section }) => {
  return (
    <section className="px-8 py-8 bg-indigo-100">
      <h1 className="text-2xl font-bold">{section.sliderList[0]?.title || 'Hero Section'}</h1>
      <p className="mt-2">{section.sliderList[0]?.paragraph || 'This is a hero section.'}</p>
    </section>
  )
}

export default HeroSectionPreview
