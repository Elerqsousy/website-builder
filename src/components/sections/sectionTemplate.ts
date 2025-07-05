import { Section } from '@/types'

const sectionTemplate: Section[] = [
  {
    id: 'group1',
    group: 'header',
    props: {
      height: 60,
      logo_text: 'logo',
      route_list: [
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
      logo_text: 'logo',
      show_logo: true,
      link_list: [
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
      slider_list: [
        {
          title: 'lorem Epsem',
          img: '#',
          button_text: 'Book a tickt',
          paragraph:
            'lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem',
        },
        {
          title: 'Home',
          img: '#',
          button_text: 'Book a tickt',
          paragraph:
            'lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem lorem epsem',
        },
      ],
    },
    classNames: '',
  },
]

export default sectionTemplate
