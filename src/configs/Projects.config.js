import PosterOne311 from '../assets/images/banner1-311.jpg';
import PosterOne481 from '../assets/images/banner1-481.jpg';
// import PosterOne2x from '../assets/images/poster1-2x.png';
import PosterTwo1x from '../assets/images/poster2-1x.png';
import PosterTwo2x from '../assets/images/poster2-2x.png';

export const ProjectsConfig = [
  {
    title: 'RouteSONAR',
    link: 'https://www.behance.net/gallery/121582261/Camp-Search-mobile-app',
    srcSet1: PosterOne311,
    srcSet2: PosterOne481,
    desc: 'RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.',
    roles: [
      { name: 'Lo-fi & Hi-fi prototyping 123' },
      { name: 'UI/UX Lead' }
    ],
    tools: [
      { name: 'Figma' },
      { name: 'Protopie' }
    ]
  },
  {
    title: 'Project Travel',
    link: 'https://www.behance.net/gallery/75218035/B2B-Travel-Itinerary',
    srcSet1: PosterTwo1x,
    srcSet2: PosterTwo2x,
    desc: 'This is a business transformation platform that focuses on creating unique touch points at all levels of the customer booking journey',
    roles: [
      { name: 'Lo-fi & Hi-fi prototyping' },
      { name: 'UI/UX Lead' }
    ],
    tools: [
      { name: 'Figma' },
      { name: 'Protopie' }
    ]
  }
];
