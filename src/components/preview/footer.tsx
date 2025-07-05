import React from 'react'

import { FooterSection } from '@/types'

type PreviewSectionType = { section: FooterSection }

const FooterSectionPreview: React.FC<PreviewSectionType> = ({ section }) => {
  return (
    <footer
      style={{
        height: `${section.props.height}px`,
      }}
      className="px-4 py-4 bg-gray-100"
    >
      {section.props?.logo_text || 'Footer Section'}
    </footer>
  )
}

export default FooterSectionPreview
