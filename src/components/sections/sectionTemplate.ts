import { Section } from '@/types'

const sectionTemplate: Section[] = [
  {
    id: 'group1',
    group: 'header',
    props: {
      height: 60,
      logo: '',
      logoText: 'logo',
      routeList: [
        { title: 'Home', route: '/' },
        { title: 'About Us', route: '/about-us' },
      ],
    },
    classNames: '',
  },
  {
    id: 'footer1',
    group: 'footer',
    props: {
      height: 60,
      logoText: 'logo',
      showLogo: true,
      logo: '',
      linkList: [
        { title: 'Home', route: '/' },
        { title: 'About Us', route: '/about-us' },
      ],
    },
    classNames: '',
  },
  {
    id: 'hero1',
    group: 'hero',
    props: {
      height: 400,
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
    classNames: '',
  },
]

export default sectionTemplate
