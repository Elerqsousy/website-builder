import React from 'react'

import { FooterSection } from '@/types'

type PreviewSectionType = { section: FooterSection }

const FooterSectionPreview: React.FC<PreviewSectionType> = ({ section }) => {
  return <footer className="px-4 py-4 bg-gray-100">{section.logoText || 'Footer Section'}</footer>
}

export default FooterSectionPreview
