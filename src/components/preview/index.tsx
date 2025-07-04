import React from 'react'

import type { SectionInstance } from '../../hooks/sections'

// Define a type for section props for each section type
type HeaderProps = { title?: string }
type HeroProps = { title?: string; description?: string }
type FooterProps = { text?: string }

type SectionPreviewProps =
  | { type: 'header'; props?: HeaderProps }
  | { type: 'hero'; props?: HeroProps }
  | { type: 'footer'; props?: FooterProps }
  | { type: string; props?: {} }

// Simple preview renderer for demo purposes
const SectionPreview: React.FC<SectionPreviewProps> = ({ type, props }) => {
  switch (type) {
    case 'header':
      return (
        <header className="px-4 py-4 bg-gray-100">
          {(props as HeaderProps)?.title || 'Header Section'}
        </header>
      )
    case 'hero':
      return (
        <section className="px-8 py-8 bg-indigo-100">
          <h1 className="text-2xl font-bold">{(props as HeroProps)?.title || 'Hero Section'}</h1>
          <p className="mt-2">{(props as HeroProps)?.description || 'This is a hero section.'}</p>
        </section>
      )
    case 'footer':
      return (
        <footer className="px-4 py-4 bg-gray-100">
          {(props as FooterProps)?.text || 'Footer Section'}
        </footer>
      )
    default:
      return <div>Unknown Section</div>
  }
}

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
