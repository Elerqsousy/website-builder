import { Section } from '@/types'

const sectionTemplate: Section[] = [
  {
    id: 'group1',
    group: 'header',
    props: {
      width: 'full',
      height: '60px',
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
      width: 'full',
      height: '60px',
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
      width: 'full',
      height: '400px',
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
