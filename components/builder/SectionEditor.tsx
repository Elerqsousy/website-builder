import React from 'react'

import type {
  SectionInstance,
  SectionProps,
  HeaderProps,
  HeroProps,
  FooterProps,
} from '../../features/sections'

type Props = {
  section: SectionInstance
  onEdit: (id: string, newProps: SectionProps) => void
}

const SectionEditor: React.FC<Props> = ({ section, onEdit }) => {
  switch (section.type) {
    case 'header':
      return (
        <div>
          <label>
            Title:{' '}
            <input
              type="text"
              value={(section.props as HeaderProps).title || ''}
              onChange={e => onEdit(section.id, { title: e.target.value })}
            />
          </label>
        </div>
      )
    case 'hero':
      return (
        <div>
          <label>
            Title:{' '}
            <input
              type="text"
              value={(section.props as HeroProps).title || ''}
              onChange={e => onEdit(section.id, { title: e.target.value })}
            />
          </label>
          <label>
            Description:{' '}
            <input
              type="text"
              value={(section.props as HeroProps).description || ''}
              onChange={e => onEdit(section.id, { description: e.target.value })}
            />
          </label>
        </div>
      )
    case 'footer':
      return (
        <div>
          <label>
            Text:{' '}
            <input
              type="text"
              value={(section.props as FooterProps).text || ''}
              onChange={e => onEdit(section.id, { text: e.target.value })}
            />
          </label>
        </div>
      )
    default:
      return null
  }
}

export default SectionEditor
