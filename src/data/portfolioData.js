import project1Img from '../assets/Project-1.png'
import project1Preview from '../assets/Project-1_Preview.png'
import project2Img from '../assets/Project-2.png'
import project2Preview from '../assets/Project-2_Preview.png'
import project3Img from '../assets/Project-3.png'
import project3Preview from '../assets/Project-3_Preview.png'
import myPhotoWithoutBg from '../assets/My-Photo-Without-BG.png'
import myPhotoWithBg from '../assets/My-Photo-With-BG.png'

export const personalInfo = {
  name: 'Md Rakibul Islam Rakib',
  shortName: 'Rakib',
  logoText: 'MRI Rakib',
  role: 'Full Stack Developer',
  headline: 'Full Stack Developer | MERN Specialist | Express.js Specialist',
  subHeadline: 'Building scalable, high-performance web applications with modern architecture and aesthetic UI.',
  location: 'Gazipur, Bangladesh',
  experience: '1.5+ Years',
  email: 'mdrakibulislam11928@gmail.com',
  github: 'https://github.com/mrirakib04',
  linkedin: 'https://www.linkedin.com/in/webdev-rakib/',
  cvUrl: 'https://mrirakib.netlify.app/Md%20Rakibul%20Islam%20Rakib_CV.pdf',
  photoWithoutBg: myPhotoWithoutBg,
  photoWithBg: myPhotoWithBg,
  bio: [
    "I am Md Rakibul Islam Rakib, a passionate Full Stack Web Developer based in Gazipur, Bangladesh. My journey started with a spark of curiosity while watching my elder brother build the web, which quickly evolved into a deep-seated passion for problem-solving through code.",
    "With over 1.5 years of hands-on experience, I specialize in the MERN Stack. I thrive on building scalable applications that solve complex problems, focusing on both aesthetic frontend interfaces and robust backend logic."
  ]
}

export const skillsData = [
  { name: 'JavaScript', category: 'Languages', level: 'Advanced', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Languages', level: 'Advanced', color: '#3178C6' },
  { name: 'Liquid', category: 'Languages', level: 'Intermediate', color: '#008060' },
  { name: 'HTML5', category: 'Languages', level: 'Expert', color: '#E34F26' },
  { name: 'CSS3', category: 'Languages', level: 'Expert', color: '#1572B6' },

  { name: 'React', category: 'Frontend', level: 'Advanced', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', level: 'Intermediate', color: '#ffffff' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', color: '#38BDF8' },
  { name: 'Material UI (MUI)', category: 'Frontend', level: 'Advanced', color: '#007FFF' },
  { name: 'Bootstrap', category: 'Frontend', level: 'Advanced', color: '#7952B3' },
  
  { name: 'Node.js', category: 'Backend', level: 'Advanced', color: '#339933' },
  { name: 'Express.js', category: 'Backend', level: 'Advanced', color: '#828282' },
  { name: 'MongoDB', category: 'Database', level: 'Advanced', color: '#47A248' },
  { name: 'Firebase', category: 'Backend', level: 'Advanced', color: '#FFCA28' },
  
  { name: 'Redux', category: 'State Management', level: 'Intermediate', color: '#764ABC' },
  { name: 'Zustand', category: 'State Management', level: 'Intermediate', color: '#ea580c' },
  { name: 'Shopify', category: 'E-Commerce', level: 'Intermediate', color: '#7AB55C' },
  { name: 'Figma', category: 'Design & Tools', level: 'Advanced', color: '#F24E1E' },
]


export const experiencesData = [
  {
    id: 'pixelora-studio',
    company: 'Pixelora Studio',
    role: 'Jr. Frontend Developer (Shopify & Liquid)',
    employmentType: 'Full-Time',
    period: 'April 2026 – Present',
    isCurrent: true,
    location: 'Rampura, Dhaka',
    badge: 'Current Position',
    companyDescription:
      'Digital agency engineering high-conversion e-commerce storefronts, custom Shopify themes, and bespoke brand solutions.',
    shortSummary:
      'Engineering high-performance Shopify storefronts, bespoke Liquid architecture, and custom theme UI tailored for global e-commerce brands.',
    summary:
      'Specializing in custom Shopify theme development, bespoke Liquid architecture, dynamic frontend customization, and seamless client communication. Transforming Figma designs into fast, accessible, and high-converting storefronts.',
    technicalResponsibilities: [
      'Architecting bespoke Shopify themes and custom Liquid templates from scratch tailored to unique brand aesthetics.',
      'Developing modular Shopify 2.0 sections, dynamic blocks, and schemas enabling smooth merchant content management.',
      'Building interactive storefront features like ajax cart drawers, dynamic variant pickers, quick-views, and upsell modules using JavaScript (ES6+).',
      'Configuring custom metafields, metaobjects, and seamless third-party app integrations to extend store capabilities.',
      'Auditing and optimizing store load speed, Core Web Vitals, mobile UX, and cross-browser responsiveness.'
    ],
    interpersonalResponsibilities: [
      'Client Communication & Requirement Gathering: Actively communicating with clients to translate business needs into technical specifications.',
      'Client Management & Milestone Delivery: Managing client expectations, providing project progress updates, and delivering on-time milestones.',
      'Cross-Functional Collaboration: Working closely with UI/UX designers and agency team members to ensure pixel-perfect fidelity from Figma prototypes.',
      'Store Handover & Guidance: Providing clients with walkthroughs and documentation for effortless store content management.'
    ],
    technicalSkills: [
      'Shopify',
      'Custom Liquid',
      'Theme Customization',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'JSON Templates',
      'Metafields & Objects',
      'Figma to Shopify',
      'Store Speed & SEO'
    ],
    interpersonalSkills: [
      'Client Communication',
      'Client Management',
      'Requirement Gathering',
      'Timeline & Delivery',
      'Cross-Functional Teamwork',
      'Store Handover & Support'
    ],
    metrics: [
      { label: 'Specialization', value: 'Shopify & Custom Liquid' },
      { label: 'Client Focus', value: 'Global E-Commerce' },
      { label: 'Store Standard', value: 'Speed & High Conversion' }
    ]
  },
  {
    id: 'freelance-fullstack',
    company: 'Full Stack Web Engineering',
    role: 'MERN Stack Developer',
    employmentType: 'Independent / Freelance',
    period: '2024 – Present',
    isCurrent: false,
    location: 'Gazipur, Bangladesh',
    badge: '1.5+ Years Exp',
    companyDescription:
      'Building production-ready full-stack web applications, role-based SaaS platforms, and enterprise dashboards with real-time architectures.',
    shortSummary:
      'Crafted robust full-stack applications with React, Node.js, Express, and MongoDB, featuring secure payment gateways and role-based access.',
    summary:
      'Crafted robust full-stack applications with React, Node.js, Express, and MongoDB. Implemented secure authentication, payment systems, and administrative control panels.',
    technicalResponsibilities: [
      'Architected end-to-end web applications with React 19, Vite, Tailwind CSS, Express.js REST APIs, and MongoDB databases.',
      'Integrated secure Stripe payment gateways, Firebase authentication, JWT authorization, and role-based access control (RBAC).',
      'Designed responsive UI dashboards featuring live analytics, interactive charts, and optimized asynchronous data fetching with TanStack Query.'
    ],
    interpersonalResponsibilities: [
      'Direct Stakeholder Communication: Managed technical requirements and feature roadmaps directly with project owners.',
      'Independent Problem Solving: Delivered complete end-to-end solutions autonomously from database design to deployment.'
    ],
    technicalSkills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'Stripe Payments',
      'Tailwind CSS',
      'RESTful APIs'
    ],
    interpersonalSkills: [
      'Autonomous Delivery',
      'Problem Solving',
      'Direct Stakeholder Reporting'
    ],
    metrics: [
      { label: 'Core Stack', value: 'MERN Architecture' },
      { label: 'Engineering Focus', value: 'Scalable Web Applications' },
      { label: 'Security & Auth', value: 'JWT & Role-Based Access' }
    ]
  }
]

export const educationData = [
  {
    id: 'hsc-sataish',
    degree: 'Higher Secondary Certificate (HSC)',
    shortDegree: 'HSC - 1st Year',
    group: 'Business Studies',
    institution: 'Sataish School & College, Gazipur',
    location: 'Gazipur, Bangladesh',
    status: '1st Year (Enrolled)',
    timeline: 'Present / Ongoing',
    isCurrent: true,
    badge: 'Higher Secondary',
    description:
      'Pursuing Higher Secondary education specializing in Business Studies, developing analytical, financial, and organizational fundamentals.',
    highlights: [
      'Business Organization & Management',
      'Finance, Banking & Accounting',
      'Analytical Thinking & Problem Solving'
    ]
  },
  {
    id: 'ssc-language-high-school',
    degree: 'Secondary School Certificate (SSC)',
    shortDegree: 'SSC - Completed',
    group: 'Business Studies',
    result: 'GPA 3.39',
    institution: 'Language High School, Gazipur',
    location: 'Gazipur, Bangladesh',
    status: 'Completed (GPA 3.39)',
    timeline: 'Completed',
    isCurrent: false,
    badge: 'Secondary Certificate',
    description:
      'Completed Secondary School Certificate education in the Business Studies discipline with a solid academic foundation.',
    highlights: [
      'Business Studies & Entrepreneurship',
      'General Mathematics & Science',
      'Foundational Accounting & Commerce'
    ]
  }
]

export const projectsData = [
  {
    id: 'nextrun-tracker',
    title: 'NextRun Tracker',
    badge: 'SaaS Platform',
    subtitle: 'Modern E-Commerce SaaS & Order Lifecycle Management',
    description: 'NextRun Tracker is a modern e-commerce–based SaaS application built with React. It provides users with a smooth shopping and order-tracking experience, while offering admins a powerful dashboard to manage products, orders, users, and payments.',
    image: project1Img,
    previewImage: project1Preview,
    liveUrl: 'https://mrirakib-ph-assignment-11.netlify.app/',
    clientRepo: 'https://github.com/mrirakib04/ph-assignment-11-web',
    serverRepo: 'https://github.com/mrirakib04/ph-assignment-11-server',
    tags: ['React (Vite)', 'Tailwind CSS', 'Material UI', 'Stripe', 'Firebase', 'TanStack Query', 'Recharts'],
    credentials: [
      { role: 'Admin', email: 'admin@mailinator.com', pass: 'ABC@123abc' },
      { role: 'Manager', email: 'manager@mailinator.com', pass: 'ABC@123abc' },
      { role: 'Buyer', email: 'buyer@mailinator.com', pass: 'ABC@123abc' }
    ],
    features: [
      'Role-based dashboards (Buyer / Manager / Admin) with granular permission control',
      'End-to-end order lifecycle tracking with interactive visual timeline',
      'Secure Stripe payment processing & financial dashboard visualization',
      '1-click order PDF invoice generation using jsPDF & jspdf-autotable',
      'Real-time product catalog with category search, filters, and smart grid',
      'Firebase Google & Email/Password authentication with protected routes',
      'Dynamic revenue & order analytics visualized using Recharts (Pie & Bar charts)'
    ],
    techStack: [
      'React (Vite)', 'React Router v7', 'Stripe Payments', 'Tailwind CSS v4',
      'Material UI (MUI)', 'TanStack React Query', 'Axios', 'Firebase Auth',
      'Recharts', 'react-fast-marquee', 'jsPDF & autotable', 'SweetAlert2'
    ]
  },
  {
    id: 'hr3-managements',
    title: 'HR3 Managements',
    badge: 'Enterprise Platform',
    subtitle: 'Streamlined Request Handling & Administrative Analytics',
    description: 'HR3 Managements is a modern web application built to streamline request handling for both users and admins. The platform provides secure authentication, dynamic request management, analytics, and a responsive user-friendly interface.',
    image: project2Img,
    previewImage: project2Preview,
    liveUrl: 'https://mrirakib-web-practice-9.netlify.app/',
    clientRepo: 'https://github.com/mrirakib04/web-practice-9',
    serverRepo: '',
    tags: ['React 19', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Recharts', 'AOS'],
    credentials: [
      { role: 'Admin', email: 'admin@a12.com', pass: 'Admin@12' }
    ],
    features: [
      'Role-based secure login system for employees and administrative heads',
      'Interactive request management: Create, filter, approve, and track item returns',
      'Centralized admin dashboard with live visual charts and statistical metrics',
      'Pie Chart visual analytics comparing returnable vs non-returnable assets',
      'Dynamic recipient email filtering and quick search indexing',
      'Real-time data synchronization without requiring manual page reload'
    ],
    techStack: [
      'React 19', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB',
      'Firebase Auth', 'TanStack Query', 'TanStack Table', 'XYFlow / React Flow',
      'AOS Animations', 'Recharts', 'SweetAlert2'
    ]
  },
  {
    id: 'sinthia-kitchen-shop',
    title: 'Sinthia Kitchen Shop',
    badge: 'E-Commerce Platform',
    subtitle: 'Modern Kitchen Appliance & Culinary E-Commerce Store',
    description: 'A full-featured web-based e-commerce platform built for managing and selling kitchen products. It includes product management, order handling, secure authentication, banner/settings management, and an admin dashboard for full control.',
    image: project3Img,
    previewImage: project3Preview,
    liveUrl: 'https://mrirakib-sks-web-test.netlify.app/',
    clientRepo: 'https://github.com/mrirakib04/sks-web',
    serverRepo: 'https://github.com/mrirakib04/sks-server',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth', 'Cloudinary'],
    credentials: [],
    features: [
      'Category-wise dynamic culinary product browsing with search and instant filters',
      'Full shopping cart workflow with quantity adjustment and responsive checkout',
      'JWT protected routes paired with Firebase authentication security',
      'Comprehensive Admin Panel: Add, update, delete products and manage storefront sliders',
      'Daily order analytics charts and revenue breakdown',
      'Cloudinary & ImgBB cloud media integration for high-speed image delivery'
    ],
    techStack: [
      'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS',
      'Material UI', 'TanStack React Query', 'Swiper.js', 'Cloudinary', 'SweetAlert2'
    ]
  }
]
