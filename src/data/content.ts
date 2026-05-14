import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';

export type ProfileKey = 'ds_recruiter' | 'pm_recruiter' | 'ml_recruiter';

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
  externalLinkLabel?: string;
  metadata: Array<{ label: string; value: string }>;
  tags: string[];
  /** Which personas should see this project. If undefined, shown to all. */
  personas?: ProfileKey[];
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
  heroes: {
    ds_recruiter: {
      headline: 'Aknur Sherkhan',
      profileSummary:
        'I work on problems where understanding the data matters as much as modeling it, and I care about clarity, rigor, and usefulness in everything I build. My background in Data Science and Economics, and the experience of living across different cultures, taught me to question assumptions and find meaning in complexity.',
      resumeUrl: '/assets/Aknur_Sherkhan_Resume_DS.pdf',
      linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
      heroVideoUrl: '/assets/hero-background.mp4',
      heroPosterUrl: '/assets/hero-photo.png',
    },
    pm_recruiter: {
      headline: 'Aknur Sherkhan',
      profileSummary:
        'I\'ve lived, studied, and worked across seven countries, and that experience shaped how I build products: stay curious, test assumptions, and design for people whose lives look nothing like your own. With a foundation in Data Science and Economics, I focus on creating products that solve real problems with clarity and intention.',
      resumeUrl: '/assets/Aknur_Sherkhan_Resume_PM.pdf',
      linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
      heroVideoUrl: '/assets/hero-background.mp4',
      heroPosterUrl: '/assets/hero-photo.png',
    },
    ml_recruiter: {
      headline: 'Aknur Sherkhan',
      profileSummary:
        'I build ML systems that learn from real‑world data. From audio classification to recommendation models, I focus on turning ideas into models that hold up under real conditions. My approach combines rigor in modeling with pragmatism in deployment.',
      resumeUrl: '/assets/Aknur_Sherkhan_Resume_ML.pdf',
      linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
      heroVideoUrl: '/assets/hero-background.mp4',
      heroPosterUrl: '/assets/hero-photo.png',
    },
  },
  contact: {
    linkedinUrl: 'https://www.linkedin.com/in/aknursherkhan',
    githubUrl: 'https://github.com/aknursherkhan',
    email: 'aknur@uni.minerva.edu',
    profileImageUrl: '/assets/aknursherkhan-linkedin-pfp.jpeg',
  },
  profiles: [
    {
      key: 'ds_recruiter',
      label: 'DS Recruiter',
      image: blueImage,
      backgroundGif:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif',
    },
    {
      key: 'pm_recruiter',
      label: 'PM Recruiter',
      image: greyImage,
      backgroundGif:
        'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNidDl5emZpejY2eGFxa2I4NW0zZGNpbWRlbnBrZ3N2dWhhbzM1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TFPdmm3rdzeZ0kP3zG/giphy.gif',
    },
    {
      key: 'ml_recruiter',
      label: 'ML Recruiter',
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
        'Taking orders over WhatsApp limited the brand\'s ability to scale. I built a custom React‑based e‑commerce platform with structured checkout, automated data tracking, and conversion analytics. Through iterative layout testing and A/B experiments, the brand achieved a 30% increase in sales within 3 months.',
      image: '/assets/projects/basqa_web.png',
      previewVideoUrl: '/assets/projects/basqa_video.mp4',
      externalUrl: 'https://basqa.kz/',
      metadata: [
        { label: 'Tech Stack', value: 'JavaScript, SQL, React, HTML/CSS' },
        { label: 'Focus Areas', value: 'Product Design, Experimentation, Conversion Optimization' },
        { label: 'Impact', value: 'User‑driven, Measurable, Scalable' },
      ],
      tags: ['Full‑Stack Build', 'A/B Testing & Iteration', '30% Sales Growth'],
      personas: ['pm_recruiter', 'ml_recruiter', 'ds_recruiter'],
    },
    {
      id: 'gsp-cloud',
      title: 'GSP Cloud',
      subtitle: 'RealQclass',
      synopsis:
        'I built an AI learning assistant embedded directly into the lecture player that summarizes content, answers questions with timestamp references, and generates quick comprehension quizzes. Through iterative testing with 400 users, the assistant improved retention by 12% and tripled quiz completion rates.',
      image: '/assets/projects/gsp-cloud-logo.jpeg',
      embedUrl: 'https://www.canva.com/design/DAHJLeN14EQ/CY5hblKzb3I_-7N5b9kwoA/view?embed',
      externalUrl: 'https://www.canva.com/design/DAHJLeN14EQ/CY5hblKzb3I_-7N5b9kwoA/view',
      metadata: [
        { label: 'Tech Stack', value: 'React, Python, GPT‑4/4o' },
        { label: 'Focus Areas', value: 'AI‑assisted learning, UX for long‑form content, experimentation' },
        { label: 'Impact', value: '+12% retention, 3× quiz completion, 400‑user A/B test' },
      ],
      tags: ['AI‑Powered Feature Build', 'A/B‑Driven Iteration', 'Improved Course Completion'],
      personas: ['pm_recruiter', 'ml_recruiter', 'ds_recruiter'],
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
      personas: ['ds_recruiter', 'ml_recruiter'],
    },
    {
      id: 'puerta-18',
      title: 'Data Infrastructure & Reporting',
      subtitle: 'Puerta 18',
      synopsis:
        'Puerta 18 relied on scattered spreadsheets and paper forms, making it impossible to understand attendance, enrollment, or long‑term impact. I designed and built a centralized CRM and data system that unified 18 years of records, automated reporting, and surfaced real‑time insights for staff. The platform became the organization\'s operational backbone, saving 15+ hours per week and giving coordinators visibility they never had before.',
      image: '/assets/projects/puerta18_logo.png',
      embedUrl: 'https://www.canva.com/design/DAHIJgOl_NQ/ntNNkC46980sjcjFRWGIvg/view?embed',
      externalUrl: 'https://www.canva.com/design/DAHIJgOl_NQ/ntNNkC46980sjcjFRWGIvg/view',
      metadata: [
        { label: 'Tech Stack', value: 'Python, SQL, Supabase (PostgreSQL), HTML / JS' },
        { label: 'Focus Areas', value: 'Data Architecture, Process Automation, Impact Measurement' },
        { label: 'Impact', value: '18 years digitized, 15+ hrs/week saved, +0.4 FTE capacity' },
      ],
      tags: ['Data Infrastructure', 'Automation & ETL', '15+ Hours Saved Weekly'],
      personas: ['pm_recruiter', 'ml_recruiter', 'ds_recruiter'],
    },
    {
      id: 'image-recommendation',
      title: 'Personalized Photo Recommendation Model',
      subtitle: 'Personal Project',
      synopsis:
        'Everyone has photos sitting on their camera roll that never get posted. I built a model that learns your Instagram aesthetic from your posting history and ranks camera roll photos by how likely you are to post them. V2 switched to similarity-based ranking with CLIP embeddings and hit 60% Precision@10, a 3x improvement over baseline.',
      image: '/assets/projects/image-cover.png',
      embedUrl: 'https://www.canva.com/design/DAHJV4gciHw/R-JAwxEaTPfYoa1IPNRKDg/view?embed',
      externalUrl: 'https://github.com/aknursherkhan/mini-capstone',
      metadata: [
        { label: 'Tech Stack', value: 'OpenAI CLIP, KMeans, Cosine Similarity, Python' },
        { label: 'Focus Areas', value: 'Personalization, Iterative Modeling, Self-Evaluation' },
        { label: 'Impact', value: '3x Precision over Baseline, 60% P@10' },
      ],
      tags: ['Similarity-Based Ranking', 'V1→V2 Iteration', '3x Precision Improvement'],
      personas: ['ds_recruiter', 'pm_recruiter', 'ml_recruiter'],
    },
    {
      id: 'kazakh-russian-classifier',
      title: 'Kazakh-Russian Speech Classifier',
      subtitle: 'Audio Classification',
      synopsis:
        'Kazakh and Russian are spoken by overlapping populations in Kazakhstan and often mixed in the same conversation. Standard classifiers assume clean, single-language audio. I built a CNN and Attentional BiLSTM trained on MFCC features from the FLEURS dataset, using GroupShuffleSplit to prevent speaker leakage across train/test splits. The BiLSTM reached 89% validation accuracy, outperforming the CNN by ~17 points.',
      image: '/assets/projects/mfcc_heatmaps.png',
      images: [
        '/assets/projects/mfcc_heatmaps.png',
        '/assets/projects/cnn_confusion_matrix.png',
        '/assets/projects/lstm_confusion_matrix.png',
      ],
      externalUrl: 'https://github.com/aknursherkhan/kazakh-russian-speech-classifier',
      metadata: [
        { label: 'Tech Stack', value: 'Python, PyTorch, LibROSA, FLEURS' },
        { label: 'Focus Areas', value: 'Audio Classification, Architecture Comparison, Data Leakage Prevention' },
        { label: 'Impact', value: '89% Val Accuracy, CNN→BiLSTM +17pp Gain' },
      ],
      tags: ['Attentional BiLSTM', 'MFCC Features', 'Speaker-Aware Splits'],
      personas: ['ds_recruiter'],
    },
    {
      id: 'urban-traffic-simulation',
      title: 'Urban Traffic Simulation',
      subtitle: 'Network Analysis',
      synopsis:
        'I built a discrete-event traffic simulator on real OpenStreetMap networks for Berlin and Buenos Aires, ran 50 Monte Carlo iterations per city, and tested whether edge betweenness centrality predicts empirical congestion. It does: Spearman r = 0.92 for peak car count, replicated across both cities.',
      image: '/assets/projects/urban-simulation/urban4.png',
      images: [
        '/assets/projects/urban-simulation/berlin_traffic_animation_copy.mp4',
        '/assets/projects/urban-simulation/urban1.png',
        '/assets/projects/urban-simulation/urban2.png',
        '/assets/projects/urban-simulation/urban3.png',
        '/assets/projects/urban-simulation/urban4.png',
        '/assets/projects/urban-simulation/urban5.png',
      ],
      externalUrl: 'https://github.com/aknursherkhan/urban-traffic-simulation',
      metadata: [
        { label: 'Tech Stack', value: 'Python, OSMnx, NetworkX, Matplotlib' },
        { label: 'Focus Areas', value: 'Network Analysis, Monte Carlo Simulation, Cross-City Replication' },
        { label: 'Impact', value: 'ρ = 0.92 Centrality-Congestion Correlation, 2 Cities' },
      ],
      tags: ['Monte Carlo Simulation', 'Network Topology', 'OSM Road Networks'],
      personas: ['ds_recruiter'],
    },
    {
      id: 'bayesian-football',
      title: 'Bayesian Football Attendance Analysis',
      subtitle: 'Hierarchical Modeling',
      synopsis:
        'What actually drives match attendance in Argentine football: the team or the day of the week? I built two competing Bayesian models (complete pooling vs. hierarchical partial pooling) on 240 Primera División games with 22 missing values, using a Negative Binomial likelihood to handle overdispersion. LOO-CV gave 100% stacking weight to the hierarchical model, and the shrinkage plot confirmed that the team identity drives attendance, day of week doesn\'t.',
      image: '/assets/projects/football-attendance/thumbnail.jpg',
      images: [
        '/assets/projects/football-attendance/plot1.png',
        '/assets/projects/football-attendance/plot2.png',
        '/assets/projects/football-attendance/plot3.png',
      ],
      externalUrl: 'https://github.com/aknursherkhan/bayesian-football-attendance',
      metadata: [
        { label: 'Tech Stack', value: 'Python, PyMC, ArviZ, pandas' },
        { label: 'Focus Areas', value: 'Hierarchical Modeling, Bayesian Inference, Missing Data Imputation' },
        { label: 'Impact', value: 'Hierarchical Model 100% LOO Weight vs. Baseline, 22 Games Imputed' },
      ],
      tags: ['Partial Pooling', 'LOO-CV Model Comparison', 'Negative Binomial'],
      personas: ['ds_recruiter'],
    },
    {
      id: 'predator-prey',
      title: 'Predator-Prey Ecosystem Simulation',
      subtitle: 'Spatial Dynamics',
      synopsis:
        'How does predator mobility shape whether two species coexist or collapse? I built a reaction-diffusion simulator for a fox-bunny ecosystem on a 200×200 spatial grid, then swept key parameters across thousands of steps to map phase boundaries. At low fox diffusion rates, the system produces Turing-like stripe patterns, foxes and bunnies self-organize into traveling spatial waves. Near g_f ≈ 0.27–0.31, extinction probability jumps from 0 to 1 over a narrow window, a stochastic phase transition confirmed across 10 independent replicates per value.',
      image: '/assets/projects/predator-prey/thumbnail.png',
      images: [
        '/assets/projects/predator-prey/animation.mp4',
        '/assets/projects/predator-prey/time-series.png',
        '/assets/projects/predator-prey/phase-transition.png',
      ],
      externalUrl: 'https://github.com/aknursherkhan/predator-prey-simulation',
      metadata: [
        { label: 'Tech Stack', value: 'Python, NumPy, Matplotlib' },
        { label: 'Focus Areas', value: 'Reaction-Diffusion Modeling, Parameter Sweeps, Spatial Pattern Formation' },
        { label: 'Impact', value: 'Phase Boundary Identified, Turing Patterns Emergent, 10-Replicate Stochastic Analysis' },
      ],
      tags: ['Reaction-Diffusion', 'Turing Patterns', 'Phase Transition'],
      personas: ['ds_recruiter'],
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
      personas: ['pm_recruiter', 'ml_recruiter'],
    },
  ] as TitleItem[],
  personaContent: {
    ds_recruiter: {
      topPicks: [
        { id: 'bayesian-football' },
        { id: 'urban-traffic-simulation' },
        { id: 'puerta-18' },
      ] as Array<{ id: string }>,
      continueWatching: [
        { id: 'image-recommendation', type: 'modal' },
        { id: 'kazakh-russian-classifier', type: 'modal' },
        { id: 'predator-prey', type: 'modal' },
        { id: 'gsp-cloud', type: 'modal' },
      ] as Array<{ id: string; type: string }>,
    },
    pm_recruiter: {
      topPicks: [
        { id: 'gsp-cloud' },
        { id: 'ecommerce' },
        { id: 'puerta-18' },
      ] as Array<{ id: string }>,
      continueWatching: [
        { id: 'image-recommendation', type: 'modal' },
        { id: 'short-film', type: 'modal' },
      ] as Array<{ id: string; type: string }>,
    },
    ml_recruiter: {
      topPicks: [
        { id: 'kazakh-russian-classifier' },
        { id: 'image-recommendation' },
        { id: 'gsp-cloud' },
      ] as Array<{ id: string }>,
      continueWatching: [
        { id: 'urban-traffic-simulation', type: 'modal' },
        { id: 'bayesian-football', type: 'modal' },
        { id: 'puerta-18', type: 'modal' },
        { id: 'predator-prey', type: 'modal' },
      ] as Array<{ id: string; type: string }>,
    },
  },
  continueWatchingItems: {
    'short-film': {
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
    } as TitleItem,
  },
};

export const profileLabels: Record<ProfileKey, string> = {
  ds_recruiter: 'Data Science Recruiter',
  pm_recruiter: 'PM Recruiter',
  ml_recruiter: 'ML Recruiter',
};