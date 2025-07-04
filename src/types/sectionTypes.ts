export type HeaderProps = { title?: string }
export type HeroProps = { title?: string; description?: string }
export type FooterProps = { text?: string }

export type SectionProps = HeaderProps | HeroProps | FooterProps

export type SectionInstance = {
  id: string
  type: string
  props: SectionProps
}
