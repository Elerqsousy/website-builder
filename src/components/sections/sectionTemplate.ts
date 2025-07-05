import { Section } from '@/types'

const sectionTemplate: Section[] = [
  {
    id: 'group1',
    group: 'header',
    width: 'full',
    height: '60px',
    classNames: '',
    logo: '',
    logoText: 'logo',
    routeList: [
      { title: 'Home', route: '/' },
      { title: 'About Us', route: '/about-us' },
    ],
  },
  {
    id: 'footer1',
    group: 'footer',
    width: 'full',
    height: '60px',
    classNames: '',
    logo: '',
    logoText: 'logo',
    showLogo: true,
    linkList: [
      { title: 'Home', route: '/' },
      { title: 'About Us', route: '/about-us' },
    ],
  },
  {
    id: 'hero1',
    group: 'hero',
    width: 'full',
    height: '400px',
    classNames: '',
    sliderList: [
      {
        title: 'lorem Epsem',
        img: '#',
        btnText: 'Book a tickt',
        paragraph:
          'lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem',
      },
      {
        title: 'Home',
        img: '#',
        btnText: 'Book a tickt',
        paragraph:
          'lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem',
      },
    ],
  },
]

export default sectionTemplate
