import React from 'react'

import { Section } from '@/types'

import FooterSectionPreview from './footer'
import HeaderSectionPreview from './header'
import HeroSectionPreview from './hero'

type PreviewSectionType = { section: Section }

const SectionRendrer: React.FC<PreviewSectionType> = ({ section }) => {
  switch (section.group) {
    case 'header':
      return <HeaderSectionPreview section={section} />
    case 'hero':
      return <HeroSectionPreview section={section} />
    case 'footer':
      return <FooterSectionPreview section={section} />
    default:
      return <div>Unknown Section</div>
  }
}

export default SectionRendrer
