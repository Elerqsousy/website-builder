import { ChangeEvent, FC } from 'react'

import { Section } from '@/types'

type RenderItemProps = {
  label: string
  value: Section[keyof Section]
  handleChange: (key: string, value: Section[keyof Section]) => void
}

type ItemArrayProps = {
  arr: { [key: string]: string }[]
  label: string
  handleChange: (key: string, value: Section[keyof Section]) => void
}

const RenderItemArray: FC<ItemArrayProps> = ({ arr, label, handleChange }) => {
  const handleObjectChange = (e: ChangeEvent<HTMLInputElement>, key: string, arrIdx: number) => {
    const newArr = arr.map((obj, idx) => (idx === arrIdx ? { ...obj, [key]: e.target.value } : obj))
    handleChange(label, newArr as unknown as Section[keyof Section])
  }

  return (
    <div className="flex flex-col gap-2">
      {arr.map((obj, arrIdx) => (
        <ul key={arrIdx} className="flex flex-col gap-1 p-2 bg-gray-50 rounded-2xl">
          {Object.entries(obj).map(([k, v]) => (
            <li key={k} className="flex items-center justify-between gap-3">
              <span className="text-sm font-bold capitalize">{k.split('_').join(' ')}</span>
              <input
                className="bg-gray-100 py-2 px-3"
                value={v}
                onChange={e => handleObjectChange(e, k, arrIdx)}
              />
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

const RenderItem: FC<RenderItemProps> = ({ label, value, handleChange }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(label, e.target.value)
  }

  return (
    <li className="flex flex-col px-2 py-3 not-last:border-b border-gray-200">
      <span className="font-bold mb-2 capitalize">{label.split('_').join(' ')}</span>
      {typeof value === 'number' && (
        <input type="number" className="bg-gray-100 py-2 px-3" value={value} onChange={onChange} />
      )}
      {typeof value === 'string' && (
        <input className="bg-gray-100 py-2 px-3" value={value} onChange={onChange} />
      )}
      {Array.isArray(value) && (
        <RenderItemArray arr={value} label={label} handleChange={handleChange} />
      )}
    </li>
  )
}

export default RenderItem
