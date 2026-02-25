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
  /** Optional array of images shown as a slideshow in the modal.
   *  When present, takes priority over previewVideoUrl/embedUrl. */
  images?: string[];
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
      'A girl who left home to chase dreams across seven countries discovers that resilience can take you further than a map ever could. With a foundation in data science and economics, she found her way into building products that just make sense.',
    resumeUrl: '/assets/Aknur_Sherkhan_Resume.pdf',
    linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
    heroVideoUrl: '/assets/hero-video.mp4',
    heroPosterUrl: '/assets/hero-photo.png',
  },
  contact: {
    linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
    githubUrl: 'https://github.com/aknursherkhan',
    email: 'aknur@uni.minerva.edu',
    profileImageUrl: '/assets/aknursherkhan-linkedin-pfp.jpeg',
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
      subtitle: 'Basqa',
      synopsis:
        'Taking orders over WhatsApp is a nightmare for growth. To help a local brand scale, I built a custom React-based e-commerce platform with a structured checkout and proper data tracking. Through iterative layout testing and conversion improvements, the brand saw a 70% increase in sales.',
      image: '/assets/projects/basqa_web.png',
      previewVideoUrl: '/assets/projects/basqa_video.mp4',
      externalUrl: 'https://basqa.kz/',
      metadata: [
        { label: 'Starring', value: 'React, SQL, JavaScript, HTML/CSS' },
        { label: 'Genre', value: 'Digital Transformation, Full-Stack Engineering' },
        { label: 'This project is', value: 'High-impact, Data-driven, Scalable ' },
      ],
      tags: ['Full-Stack', 'A/B Tested', 'Data-Driven'],
    },
    {
      id: 'gsp-cloud',
      title: 'GSP Cloud Project',
      subtitle: 'RealQclass',
      synopsis:
        'Built a GPT-powered learning platform to make enterprise training more interactive and adaptive. I focused on structuring intuitive user flows, designing conversational interfaces, and refining prompt logic to support meaningful engagement rather than passive content consumption.',
      image: '/assets/projects/gsp_cloud_inside.png',
      externalUrl: 'https://realqclass.com/',
      metadata: [
        { label: 'Starring', value: 'React.js, Python, GPT-powered AI' },
        { label: 'Genre', value: 'EdTech, SaaS, Artificial Intelligence' },
        { label: 'This project is', value: 'High-Retention, User-Centric' },
      ],
      tags: ['React/Python', 'GPT-Powered', '25% Retention Boost'],
    },
    {
      // ─────────────────────────────────────────────────────────────
      // DATA VISUALIZATIONS — slideshow entry
      //
      // Add your assignment images to the `images` array below.
      // Paths are relative to /public — e.g. if the file is at
      //   public/assets/projects/dataviz/chart1.png
      // then the path is:
      //   '/assets/projects/dataviz/chart1.png'
      //
      // You can also use imported images:
      //   import chart1 from '../images/dataviz/chart1.png';
      //   ...
      //   images: [chart1, chart2, chart3],
      // ─────────────────────────────────────────────────────────────
      id: 'data-visualizations',
      title: 'Data Visualizations',
      subtitle: 'Dataviz Series',
      synopsis:
        'A selection of data visualizations created for academic and independent projects. These include regression analyses, exploratory data analysis, model outputs, etc. Built using Python and Tableau and designed to communicate results clearly and accurately.',
      image: '/assets/projects/dataviz.png', // still used as card thumbnail
      images: [
        // 👇 Replace / add your actual image paths here
        '/assets/projects/dataviz/viz1.png',
        '/assets/projects/dataviz/viz2.png',
        '/assets/projects/dataviz/viz3.png',
        '/assets/projects/dataviz/viz4.png',
        '/assets/projects/dataviz/viz5.png',
        '/assets/projects/dataviz/viz6.png',
        '/assets/projects/dataviz/viz7.png',
        '/assets/projects/dataviz/viz8.png',
        '/assets/projects/dataviz/viz9.png',
        '/assets/projects/dataviz/viz10.png',
      ],
      // previewVideoUrl is intentionally omitted — images[] takes priority
      metadata: [
        { label: 'Starring', value: 'Python, Pandas, Matplotlib, Seaborn, Tableau' },
        { label: 'Genre', value: 'Data Analytics, Visual Storytelling' },
        { label: 'This project is', value: 'Analytical, Insightful, Actionable' },
      ],
      tags: ['Python & Tableau','Data Storytelling', 'Statistical Analysis'],
    },
    {
      id: 'zwift',
      title: 'Zwift',
      subtitle: 'Vamos Jogar',
      synopsis:
        'Designed an AI-powered vocabulary card game that used GPT as a dynamic game master to generate prompts, assess responses, and adjust difficulty in real time. Through rapid prototyping and playtesting cycles, we refined rule clarity, feedback timing, and engagement mechanics to deliver a functional prototype grounded in both pedagogy and usability.',
      image: '/assets/projects/zwift.png',
      embedUrl:
        'https://www.canva.com/design/DAHB_iNo0iY/k6LhCVZGiUAiZgcpN42KEQ/view?embed',
      externalUrl: 'https://drive.google.com/drive/folders/1IFowId1GGhjHFGF1Uran_EfgudozGwwq?usp=sharing',
      metadata: [
        { label: 'Starring', value: 'GPT-4, Figma, Prompt Engineering, Physical UX' },
        { label: 'Genre', value: 'Card game, AI Interaction' },
        { label: 'This project is', value: 'Highly Collaborative, AI-Driven, Hybrid UX' },
      ],
      tags: ['GPT Game Master', 'Rapid Prototyping', 'Language Learning'],
    },
  ] as TitleItem[],
  continueWatching: [
    {
      id: 'short-film',
      title: '인연 (Short Film)',
      image: '/assets/projects/short_film_poster.png',
      type: 'modal',
      modalData: {
        id: 'short-film',
        title: 'Short Film',
        subtitle: '인연',
        synopsis:
          'Co-produced in Seoul as part of a three-person team for the Minervopolis Film Festival. Involved in every stage, from concept development and production planning to shooting and post-production. The project received the Golden Owl (Jury Selection) and the Audience Choice Award.',
        image: '/assets/projects/short_film_poster.png',
        embedUrl:
          'https://www.youtube.com/embed/-sincJEyW_8?si=4WUF8qrU8ThrBV1n',
        metadata: [
          { label: 'Role', value: 'Co-producer' },
          { label: 'Format', value: 'Short Film' },
          { label: 'Platform', value: 'YouTube' },
        ],
        tags: ['Creative Direction', 'End-to-End Production', 'Double Award Winner'],
      },
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      image: '/assets/projects/recommendation.png',
      type: 'modal',
      modalData: {
        id: 'recommendations',
        title: 'Recommendations',
        subtitle: 'Academic Recommendation',
        synopsis:
          'A LinkedIn recommendation from a professor in Formal Analysis, reflecting academic rigor, analytical strength, and collaboration.',
        image: '/assets/projects/prof_hadavand_recommendation.png',
        metadata: [
          { label: 'Source', value: 'LinkedIn' },
          { label: 'Type', value: 'Recommendation' },
        ],
        tags: ['Analytical Skills', 'Attention to Detail', 'Effective Communicator'],
      },
    },
    {
      id: 'contact',
      title: 'Contact Me',
      image: '/assets/projects/contact_me.png',
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