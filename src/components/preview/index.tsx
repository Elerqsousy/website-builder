import React from 'react'

import { SectionInstance } from '@/types'

import SectionPreview from './sectionPreview'

const Preview: React.FC<{ sections: SectionInstance[] }> = ({ sections }) => (
  <div className="border border-gray-200 mt-4 min-h-[200px] rounded-lg">
    {sections.length === 0 && (
      <div className="text-gray-400 text-center py-8">No sections yet.</div>
    )}
    {sections.map(section => (
      <SectionPreview key={section.id} type={section.type} props={section.props} />
    ))}
  </div>
)

export default Preview
