import { ChangeEvent, FC } from 'react'

import { Section } from '@/types'

type RenderItemProps = {
  label: string
  value: Section[keyof Section]
  handleChange: (key: string, value: Section[keyof Section]) => void
}

const RenderItem: FC<RenderItemProps> = ({ label, value, handleChange }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(label, e.target.value)
  }
  return (
    <li className="flex flex-col px-2 py-3 not-last:border-b border-gray-200">
      <span className="font-bold mb-2">{label}</span>
      {typeof value === 'number' && (
        <input type="number" className="bg-gray-100 py-2 px-3" value={value} onChange={onChange} />
      )}
      {typeof value === 'string' && (
        <input className="bg-gray-100 py-2 px-3" value={value} onChange={onChange} />
      )}
    </li>
  )
}

export default RenderItem
