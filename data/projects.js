/**
 * Verified Projects & Case Studies
 * Source: clinginfotech.com/portfolio (active video records and client deployments).
 * Strictly contains verified real projects. No invented case studies.
 */

export const projectsData = [
  {
    id: "matrix-erp",
    name: "Matrix ERP",
    category: "Enterprise Software",
    eyebrow: "Enterprise Resource Planning",
    client: "Enterprise Deployment",
    description:
      "A centralized enterprise platform that unifies operations, multi-warehouse inventory, procurement workflows, and executive analytics into a unified real-time dashboard.",
    deliverables: ["Custom ERP Architecture", "Inventory & Warehouse Engine", "Financial Reporting"],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    featured: true, // Primary large hero project card
    videoUrl: "https://cling-3dvideos.s3.ap-south-1.amazonaws.com/Matrix-Web.webm",
    image: "/images/image.webp",
    alt: "Matrix Enterprise ERP dashboard interface",
  },
  {
    id: "epaylater",
    name: "ePayLater Portal",
    category: "Fintech & Payments",
    eyebrow: "Digital Checkout & Credit",
    client: "ePayLater",
    description:
      "A high-concurrency digital checkout and business credit integration interface enabling instant credit evaluation, transactional security, and frictionless merchant payouts.",
    deliverables: ["Payment Portal", "Real-Time Verification", "Merchant Analytics"],
    technologies: ["Next.js", "Tailwind CSS", "REST APIs", "AWS"],
    featured: false,
    videoUrl: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/Epay.mp4",
    image: "/images/image.webp",
    alt: "ePayLater checkout portal interface",
  },
  {
    id: "ambit-finvest",
    name: "Ambit Finvest",
    category: "Financial Services",
    eyebrow: "Customer Onboarding Portal",
    client: "Ambit Finvest",
    description:
      "An institutional customer onboarding and digital loan servicing application engineered to streamline document compliance, KYC validation, and status tracking.",
    deliverables: ["Customer Onboarding Flow", "Document Vault", "Status Telemetry"],
    technologies: ["React", "Secure API Gateway", "Cloud Infrastructure"],
    featured: false,
    videoUrl: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/ambit+finvest.mp4",
    image: "/images/image.webp",
    alt: "Ambit Finvest digital loan servicing portal",
  },
  {
    id: "curate-intel",
    name: "Curate",
    category: "CRM & Social Intelligence",
    eyebrow: "Audience Data Automation",
    client: "Social CRM Deployment",
    description:
      "An automated social contact synchronization and follower intelligence system fetching status metrics across multi-channel social APIs.",
    deliverables: ["API Harvesting Pipeline", "Audience Sync Engine", "CRM Contact Dashboard"],
    technologies: ["Node.js", "OAuth Integrations", "Redis Queue"],
    featured: false,
    videoUrl: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/curate-whatsapp.mp4",
    image: "/images/image.webp",
    alt: "Curate contact synchronization dashboard",
  },
  {
    id: "speech-ally",
    name: "Speech Ally (PhonoLogix)",
    category: "Healthcare & Teletherapy",
    eyebrow: "Clinical Practice Management",
    client: "PhonoLogix Health",
    description:
      "A mobile speech assessment tool and comprehensive therapist administrative web portal enabling synchronized exercise tracking, audio diagnostics, and session notes.",
    deliverables: ["Therapist Admin Dashboard", "Cross-Platform Mobile App", "Audio Telemetry"],
    technologies: ["React Native", "WebRTC", "Encrypted Cloud Storage"],
    featured: false,
    videoUrl: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/SpeechAlly-Mobile.MP4",
    image: "/images/image.webp",
    alt: "Speech Ally therapist portal and mobile app",
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    category: "Productivity & Operations",
    eyebrow: "Agile Project Coordination",
    client: "Internal / Commercial",
    description:
      "A streamlined sprint coordination and multi-team resource allocation tool featuring real-time kanban views, task dependencies, and milestone tracking.",
    deliverables: ["Kanban Board", "Resource Allocator", "Time Tracking Engine"],
    technologies: ["React", "WebSockets", "Node.js"],
    featured: false,
    videoUrl: "https://cling-portfolio-video.s3.ap-south-1.amazonaws.com/TaskFlow.mp4",
    image: "/images/image.webp",
    alt: "TaskFlow sprint management and kanban interface",
  },
];

/**
 * Verified Tech Spotlight Features (AI Surveillance & 3D Animation)
 * Source: clinginfotech.com live homepage current tech focus modules.
 */
export const techSpotlightData = [
  {
    id: "ai-surveillance",
    title: "AI Surveillance Intelligence",
    badge: "Computer Vision",
    eyebrow: "Autonomous Anomaly Detection",
    description:
      "A real-time deep learning surveillance model that processes high-fps camera feeds to autonomously flag unauthorized perimeter incursions, crowd density anomalies, and suspicious activity.",
    capabilities: [
      "Real-time perimeter intrusion alerting",
      "Low-latency edge & cloud inference",
      "Multi-stream video processing telemetry",
    ],
    image: "/images/ai-surveillance.png",
    alt: "AI surveillance computer vision anomaly detection interface",
  },
  {
    id: "3d-visualization",
    title: "3D Visual Computing & Animation",
    badge: "Visual Computing",
    eyebrow: "Interactive Product Models",
    description:
      "Bespoke 3D CGI animations and mechanical walkthroughs built to showcase complex software architectures, product hardware capabilities, and brand identity in motion.",
    capabilities: [
      "Physics-accurate component modeling",
      "Dynamic lighting & procedural textures",
      "Interactive 360° product presentation",
    ],
    image: "/images/3d-animation.png",
    alt: "3D digital animation and technical rendering showcase",
  },
];
