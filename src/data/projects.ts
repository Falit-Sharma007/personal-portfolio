export interface ProjectScreenshot {
    src: string;
    alt: string;
}

export interface Project {
    title: string;

    type: "Personal Project" | "Professional Project";

    featured: boolean;

    description: string;

    contributions?: string[];

    features?: string[];

    technologies: string[];

    status: string;

    github?: string;

    live?: string;

    image?: string;

    screenshots?: ProjectScreenshot[];
}

export const projects: Project[] = [
    {
        title: "Restaurant Food SaaS",

        type: "Personal Project",

        featured: true,

        description:
            "A multi-tenant restaurant management platform featuring restaurant dashboards, customer-facing applications, menu management, real-time order tracking, payments, branding, and responsive interfaces.",

        features: [
            "Restaurant Dashboard",
            "Customer Web Application",
            //   "Customer Flutter Application",
            "Authentication & Authorization",
            "Menu Management",
            "Real-time Order Tracking",
            "Payment Integration",
            "Restaurant Branding",
            "Responsive Design",
            "Multi-Tenant Architecture",
        ],

        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Express.js",
            "Prisma",
            "Supabase",
            "Tailwind CSS",
            //   "Flutter",
            "Socket.IO",
        ],

        status: "Active Development",

        github: "",

        live: "",

        screenshots: [
            {
                src: "/projects/restaurant/dashboard.png",
                alt: "Restaurant management dashboard",
            },
            {
                src: "/projects/restaurant/menu-management.png",
                alt: "Restaurant menu management interface",
            },
            {
                src: "/projects/restaurant/customer-home.png",
                alt: "Customer-facing restaurant ordering website",
            },
            {
                src: "/projects/restaurant/customer-order-tracking.png",
                alt: "Customer order tracking interface",
            },
        ],
    },

    {
        title: "Fitness & Nutrition Platform",

        type: "Professional Project",

        featured: false,

        description:
            "Developed responsive user interfaces for a fitness and nutrition platform with an interactive onboarding experience.",

        contributions: [
            "Built multi-step onboarding flow",
            "Developed BMI Calculator",
            "Created progress visualization",
            "Built reusable UI components",
            "Implemented responsive layouts",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        status: "Completed",
    },

    {
        title: "Lead Generation Platform",

        type: "Professional Project",

        featured: false,

        description:
            "Built React.js interfaces for authentication, messaging, lead management, and LinkedIn integrations.",

        contributions: [
            "Authentication flows",
            "Messaging UI",
            "Lead Management",
            "REST API Integration",
            "LinkedIn Account Integration",
            "Reusable Components",
        ],

        technologies: [
            "React.js",
            "JavaScript",
            "REST APIs",
            "CSS",
        ],

        status: "Completed",
    },

    {
        title: "Healthcare Management System",

        type: "Professional Project",

        featured: false,

        description:
            "Developed role-based healthcare modules with dynamic forms, reusable tables, document management, and electronic signatures.",

        contributions: [
            "Dynamic Forms",
            "Reusable Tables",
            "Electronic Signatures",
            "Document Management",
            "Role Based Modules",
        ],

        technologies: [
            "Vue.js",
            "JavaScript",
            "CSS",
        ],

        status: "Completed",
    },
];