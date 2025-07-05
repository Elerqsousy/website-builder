export type Route = {
  title: string
  route: string
}

export type Slider = {
  title: string
  img: string
  button_text: string
  paragraph: string
}

export type SectionGroup = 'header' | 'footer' | 'hero'

export type BaseSection<T> = {
  id: string
  props: {
    height: number
  } & T
  classNames: string
}

export type HeaderSection = BaseSection<{ logo_text: string; route_list: Route[] }> & {
  group: 'header'
}

export type FooterSection = BaseSection<{
  logo_text: string
  show_logo: boolean
  link_list: Route[]
}> & {
  group: 'footer'
}

export type HeroSection = BaseSection<{ slider_list: Slider[] }> & {
  group: 'hero'
}

export type Section = HeaderSection | FooterSection | HeroSection
