import React from 'react'

import { HeaderSection } from '@/types'

type PreviewSectionType = { section: HeaderSection }

const HeaderSectionPreview: React.FC<PreviewSectionType> = ({ section }) => {
  const { height, logo_text, route_list } = section.props
  return (
    <header
      className="flex items-center justify-between min-h-[60px] px-8 py-4 bg-gray-100"
      style={{
        height: `${height}px`,
      }}
    >
      <h2 className="font-bold text-2xl">{logo_text}</h2>
      <nav className="flex gap-3 items-center">
        {route_list.map(({ title, route }) => (
          <a key={route} href="route" className="hover:underline">
            {title}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default HeaderSectionPreview
