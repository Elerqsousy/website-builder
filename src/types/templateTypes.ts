export type Route = {
  title: string
  route: string
}

export type Slider = {
  title: string
  img: string
  btnText: string
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

export type HeaderSection = BaseSection<{ logo: string; logoText: string; routeList: Route[] }> & {
  group: 'header'
}

export type FooterSection = BaseSection<{
  logo: string
  logoText: string
  showLogo: boolean
  linkList: Route[]
}> & {
  group: 'footer'
}

export type HeroSection = BaseSection<{ sliderList: Slider[] }> & {
  group: 'hero'
}

export type Section = HeaderSection | FooterSection | HeroSection
