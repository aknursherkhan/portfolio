import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';

export type ProfileKey = 'recruiter' | 'developer' | 'stalker';

export interface ProfileOption {
  key: ProfileKey;
  label: string;
  image: string;
  backgroundGif: string;
}

export interface TitleItem {
  id: string;
  title: string;
  subtitle?: string;
  synopsis: string;
  image: string;
  previewVideoUrl?: string;
  embedUrl?: string;
  externalUrl?: string;
  metadata: Array<{ label: string; value: string }>;
  tags: string[];
}

export interface ContinueItem {
  id: string;
  title: string;
  image: string;
  type: 'modal' | 'link';
  link?: string;
  modalData?: TitleItem;
}

export const siteContent = {
  landingName: 'Aknur Sherkhan',
  hero: {
    headline: 'Aknur Sherkhan',
    profileSummary:
      'Product-minded designer and developer focused on crafting cinematic, human-centered digital experiences.',
    resumeUrl: '/assets/Aknur_Sherkhan_Resume.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
    heroVideoUrl: 'https://www.w3schools.com/howto/rain.mp4',
    heroPosterUrl: '/assets/placeholder-hero.svg',
  },
  contact: {
    linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
    githubUrl: 'https://github.com/aknursherkhan',
    email: 'hello@example.com',
    profileImageUrl: '/assets/aknursherkhan-linkedin.jpg',
  },
  profiles: [
    {
      key: 'recruiter',
      label: 'Recruiter',
      image: blueImage,
      backgroundGif:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif',
    },
    {
      key: 'developer',
      label: 'Developer',
      image: greyImage,
      backgroundGif:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif',
    },
    {
      key: 'stalker',
      label: 'Stalker',
      image: redImage,
      backgroundGif:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExc28yMjMyZmJ6eWtxbmNwdDV6cXk4dWZmcjFhZms2cXBjN2h5ZDJjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QjZXUBUr89CkiWLPjL/giphy.gif',
    },
  ] as ProfileOption[],
  topPicks: [
    {
      id: 'ecommerce',
      title: 'E-commerce Project',
      subtitle: 'Qazaq Republic',
      synopsis:
        'A fashion-forward commerce experience designed to highlight bold identity, immersive storytelling, and premium product presentation.',
      image: '/assets/projects/placeholder-project.svg',
      previewVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      externalUrl: 'https://qazaqrepublic.com/en',
      metadata: [
        { label: 'Category', value: 'E-commerce' },
        { label: 'Role', value: 'Product Design, UX, Visual Systems' },
        { label: 'Experience', value: 'Immersive shopping, brand storytelling' },
      ],
      tags: ['E-commerce', 'Brand', 'UX/UI'],
    },
    {
      id: 'gsp-cloud',
      title: 'GSP Cloud Project',
      subtitle: 'RealQclass',
      synopsis:
        'Cloud-based learning platform built to make enterprise training feel cinematic, structured, and instantly engaging.',
      image: '/assets/projects/placeholder-project.svg',
      previewVideoUrl: 'https://www.w3schools.com/html/movie.mp4',
      externalUrl: 'https://realqclass.com/',
      metadata: [
        { label: 'Category', value: 'Cloud Platform' },
        { label: 'Role', value: 'Product Strategy, Interface Design' },
        { label: 'Focus', value: 'Learning experience, usability' },
      ],
      tags: ['Cloud', 'SaaS', 'Product'],
    },
    {
      id: 'data-visualizations',
      title: 'Data Visualizations',
      subtitle: 'Assignment Series',
      synopsis:
        'A curated gallery of analytical visuals, crafted to make complex insights feel intuitive and cinematic.',
      image: '/assets/projects/placeholder-visuals.svg',
      previewVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      metadata: [
        { label: 'Category', value: 'Data Visualization' },
        { label: 'Tools', value: 'Tableau, Illustrator, Figma' },
        { label: 'Focus', value: 'Storytelling with data' },
      ],
      tags: ['Visualization', 'Storytelling', 'Research'],
    },
    {
      id: 'zwift',
      title: 'Zwift',
      subtitle: 'Card, Box, Instruction Design',
      synopsis:
        'A complete packaging and instruction system built for clarity, premium feel, and high-energy performance branding.',
      image: '/assets/projects/placeholder-zwift.svg',
      previewVideoUrl: 'https://www.w3schools.com/html/movie.mp4',
      metadata: [
        { label: 'Category', value: 'Packaging & Print' },
        { label: 'Deliverables', value: 'Card, Box, Instructional Design' },
        { label: 'Focus', value: 'Physical experience' },
      ],
      tags: ['Packaging', 'Print', 'Brand'],
    },
  ] as TitleItem[],
  continueWatching: [
    {
      id: 'short-film',
      title: 'Short Film',
      image: '/assets/projects/placeholder-film.svg',
      type: 'modal',
      modalData: {
        id: 'short-film',
        title: 'Short Film',
        subtitle: 'Co-produced',
        synopsis:
          'A cinematic short film co-produced to explore atmosphere, pacing, and emotional storytelling.',
        image: '/assets/projects/placeholder-film.svg',
        embedUrl:
          'https://www.youtube.com/embed/-sincJEyW_8?si=4WUF8qrU8ThrBV1n',
        metadata: [
          { label: 'Role', value: 'Co-producer' },
          { label: 'Format', value: 'Short Film' },
          { label: 'Platform', value: 'YouTube' },
        ],
        tags: ['Film', 'Production', 'Storytelling'],
      },
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      image: '/assets/projects/placeholder-recommendation.svg',
      type: 'modal',
      modalData: {
        id: 'recommendations',
        title: 'Recommendations',
        subtitle: 'Professor Endorsement',
        synopsis:
          'A highlight reel of academic and professional recommendations spotlighting collaboration and craft.',
        image: '/assets/projects/placeholder-recommendation.svg',
        metadata: [
          { label: 'Source', value: 'LinkedIn' },
          { label: 'Type', value: 'Recommendation' },
        ],
        tags: ['Testimonials', 'Leadership', 'Mentorship'],
      },
    },
    {
      id: 'contact',
      title: 'Contact Me',
      image: '/assets/projects/placeholder-contact.svg',
      type: 'link',
      link: '/contact-me',
    },
  ] as ContinueItem[],
};

export const profileLabels: Record<ProfileKey, string> = {
  recruiter: 'Recruiter',
  developer: 'Developer',
  stalker: 'Stalker',
};
