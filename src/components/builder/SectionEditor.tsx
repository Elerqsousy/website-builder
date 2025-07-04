import React from 'react'

import type {
  SectionInstance,
  SectionProps,
  HeaderProps,
  HeroProps,
  FooterProps,
} from '../../hooks/sections'

type Props = {
  section: SectionInstance
  onEdit: (id: string, newProps: SectionProps) => void
}

const SectionEditor: React.FC<Props> = ({ section, onEdit }) => {
  switch (section.type) {
    case 'header':
      return (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            Title:
            <input
              type="text"
              value={(section.props as HeaderProps).title || ''}
              onChange={e => onEdit(section.id, { title: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </label>
        </div>
      )
    case 'hero':
      return (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            Title:
            <input
              type="text"
              value={(section.props as HeroProps).title || ''}
              onChange={e => onEdit(section.id, { title: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </label>
          <label className="flex items-center gap-2">
            Description:
            <input
              type="text"
              value={(section.props as HeroProps).description || ''}
              onChange={e => onEdit(section.id, { description: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </label>
        </div>
      )
    case 'footer':
      return (
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            Text:
            <input
              type="text"
              value={(section.props as FooterProps).text || ''}
              onChange={e => onEdit(section.id, { text: e.target.value })}
              className="border rounded px-2 py-1"
            />
          </label>
        </div>
      )
    default:
      return null
  }
}

export default SectionEditor
