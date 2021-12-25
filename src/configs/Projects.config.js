import PosterOne311 from '../assets/images/banner1-311.jpg';
import PosterOne481 from '../assets/images/banner1-481.jpg';
import PosterTwo311 from '../assets/images/banner2-311.jpg';
import PosterTwo481 from '../assets/images/banner2-481.jpg';

export const ProjectsConfig = [
  {
    title: 'RouteSONAR',
    link: 'https://www.behance.net/gallery/131223179/RouteSONAR-Route-Optimization-Web-Application',
    srcSet1: PosterOne311,
    srcSet2: PosterOne481,
    desc: 'RouteSONAR is an innovative route optimization platform developed to find the most efficient travel route out of all possible outcomes mapped across the multiple last mile delivery locations.',
    roles: [
      { name: 'Lo-fi & Hi-fi prototyping' },
      { name: 'UI/UX Lead' },
      { name: 'FE Development' }
    ],
    tools: [
      { name: 'Figma' },
      { name: 'Protopie' },
      { name: 'React JS' }
    ]
  },
  {
    title: 'CampMo',
    link: 'https://www.behance.net/gallery/121582261/Camp-Search-mobile-app',
    srcSet1: PosterTwo311,
    srcSet2: PosterTwo481,
    desc: 'The platform that allows travellers to find their ideal campgrounds for their holidays and get recommendations based on their preferences.',
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
