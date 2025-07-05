import React from 'react'

import { HeaderSection } from '@/types'

type PreviewSectionType = { section: HeaderSection }

const HeaderSectionPreview: React.FC<PreviewSectionType> = ({ section }) => {
  return (
    <header className="px-4 py-4 bg-gray-100">{section.props?.logoText || 'Header Section'}</header>
  )
}

export default HeaderSectionPreview
