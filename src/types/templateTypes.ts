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

export type BaseSection = {
  id: string
  width: string
  height: string
  classNames: string
}

export type HeaderSection = BaseSection & {
  group: 'header'
  logo: string
  logoText: string
  routeList: Route[]
}

export type FooterSection = BaseSection & {
  group: 'footer'
  logo: string
  logoText: string
  showLogo: boolean
  linkList: Route[]
}

export type HeroSection = BaseSection & {
  group: 'hero'
  sliderList: Slider[]
}

export type Section = HeaderSection | FooterSection | HeroSection

export type SectionMap = {
  header: HeaderSection
  footer: FooterSection
  hero: HeroSection
}
