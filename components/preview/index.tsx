import React from 'react'

import type { SectionInstance } from '../../features/sections'

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
        <header style={{ padding: 16, background: '#eee' }}>
          {(props as HeaderProps)?.title || 'Header Section'}
        </header>
      )
    case 'hero':
      return (
        <section style={{ padding: 32, background: '#cce' }}>
          <h1>{(props as HeroProps)?.title || 'Hero Section'}</h1>
          <p>{(props as HeroProps)?.description || 'This is a hero section.'}</p>
        </section>
      )
    case 'footer':
      return (
        <footer style={{ padding: 16, background: '#eee' }}>
          {(props as FooterProps)?.text || 'Footer Section'}
        </footer>
      )
    default:
      return <div>Unknown Section</div>
  }
}

const Preview: React.FC<{ sections: SectionInstance[] }> = ({ sections }) => (
  <div style={{ border: '1px solid #ddd', marginTop: 16, minHeight: 200 }}>
    {sections.length === 0 && (
      <div style={{ color: '#aaa', textAlign: 'center', padding: 32 }}>No sections yet.</div>
    )}
    {sections.map(section => (
      <SectionPreview key={section.id} type={section.type} props={section.props} />
    ))}
  </div>
)

export default Preview
