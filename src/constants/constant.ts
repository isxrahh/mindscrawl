import {
    FileText,
    Database,
    CheckSquare,
    Palette,
    Zap,
    Sparkles,
    LucideIcon,
    Lock,
    Heart,
    UsersRound, NotebookPen, ClockArrowUp, Star,
    Rocket, DatabaseZap, AtomIcon, LucideNewspaper, LucideClock1, Globe, LucideMonitorSmartphone, GitMerge,
} from "lucide-react";
import {IconType} from "react-icons";
import {FaMeta} from "react-icons/fa6";
import {FaApple, FaGoogle, FaAmazon, FaMicrosoft,} from "react-icons/fa";
import {motion} from "framer-motion";
import React from "react";

export interface Features {
    id: number;
    title: string;
    desc: string;
    icon: LucideIcon;
}

export interface NAVITEMS {
    id: number;
    title: string;
    href: string;
}

export interface avatars_group {
    id: number;
    src: string;
    fallback: string;
    tooltip: string;
}

export interface company_name {
    id: number;
    image: string;
    name: string;
}

export interface reviews_data {
    id: number;
    quote: string;
    name: string;
    role: string;
    image: string;
}

export interface company_index {
    id: number;
    src: IconType;
    alt: string;
}

export interface whyfeatures {
    id: number;
    title: string;
    desc: string;
    icon: LucideIcon;
}

export interface templates_data {
    id: number;
    title: string;
    desc: string;
    desc_1: string;
    desc_2: string;
    desc_3: string;
    src: string;
}

export interface milestones_data {
    id: number;
    label: string;
    icon: LucideIcon;
    value: number;
    suffix: string;
}

export interface timeline_data{
    id: number;
    title: string;
    icon: LucideIcon;
    desc: string;
    date: string;
}

export const features_name: Features[] = [
    {
        id: 1,
        icon: FileText,
        title: "Rich Notes & Pages",
        desc: "Block-based editor with embeds, links, and slash commands"
    },
    {id: 2, icon: Database, title: "Flexible Databases", desc: "Tables, kanban, calendar, gallery views"},
    {id: 3, icon: CheckSquare, title: "Smart Tasks", desc: "Habits, reminders, priorities, and streaks"},
    {id: 4, icon: Palette, title: "Beautiful Themes", desc: "Dark mode, custom colors, premium feel"},
    {id: 5, icon: Zap, title: "Blazing Fast", desc: "Offline-first, instant loading"},
    {id: 6, icon: Sparkles, title: "Your Data, Yours", desc: "Local storage, full ownership"},
]

export const keywords: string[] = [
    "notes", "tasks", "databases", "ideas", "life", "projects", "knowledge"
]

export const nav_items: NAVITEMS[] = [
    {id: 1, title: "Features", href: "/features"},
    {id: 2, title: "Pricing", href: "/pricing"},
    {id: 3, title: "Get Started", href: "/getstarted"},
    {id: 4, title: "Sign In", href: "/signin"},
]

export const AVATARS: avatars_group[] = [
    {
        id: 1,
        src: 'https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg',
        fallback: 'SK',
        tooltip: 'Skyleen',
    },
    {
        id: 2,
        src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
        fallback: 'CN',
        tooltip: 'Shadcn',
    },
    {
        id: 3,
        src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
        fallback: 'AW',
        tooltip: 'Adam Wathan',
    },
    {
        id: 4,
        src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
        fallback: 'GR',
        tooltip: 'Guillermo Rauch',
    },
    {
        id: 5,
        src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
        fallback: 'JH',
        tooltip: 'Jhey',
    },
]

export const COMPANY: company_name[] = [

    {
        id: 1,
        name: "Company A",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
    },
    {
        id: 2,
        name: "Company B",
        image: "https://cdn.worldvectorlogo.com/logos/toyota-car-logo.svg"
    },
    {
        id: 3, name: "Company C",
        image: "https://www.salesforce.com/content/dam/web/en_us/www/images/customer-stories/spotify/spotify-transparent.png"
    },
    {
        id: 4,
        name: "Company D",
        image: "https://www.pixartprinting.it/blog/wp-content/uploads/2022/12/figma_logo.png"
    }, {
        id: 5,
        name: "Company E",
        image: "https://marvel-b1-cdn.bc0a.com/f00000000004333/www.zuora.com/wp-content/uploads/2023/02/capgemini-p-c.png"
    }, {
        id: 6,
        name: "Company F",
        image: "https://i0.wp.com/teltales.port.ac.uk/wp-content/uploads/2017/11/duolingo-1.png?fit=676%2C201&ssl=1"
    }
]

// Sample data for reviews
export const REVIEWS: reviews_data[] = [
    {
        id: 1,
        quote: "MindScrawl has completely transformed how I organize my thoughts and projects.",
        name: "Emma Wilson",
        role: "Product Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVlbmFnZXIlMjBnaXJsfGVufDB8fDB8fHww"
    },
    {
        id: 2,
        quote: "The best note-taking app I've used. Fast, beautiful, and actually private.",
        name: "Liam Chen",
        role: "Developer",
        image: "https://img.freepik.com/free-photo/cheerful-guy-enjoying-outdoor-coffee-break_1262-20005.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 3,
        quote: "Finally replaced Notion. Simpler, faster, and feels premium.",
        name: "Sophia Martinez",
        role: "Student",
        image: "https://img.freepik.com/free-photo/studio-shot-cute-brunette-girl_176420-28664.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 4,
        quote: "Mindscrawl is the first tool that understands the mess of a long-form investigation. The AI doesn't just store my notes; it cross-references my sources in real-time.",
        name: "Julia Vane",
        role: "Independent Investigative Reporter",
        image: "https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
        id: 5,
        quote: "I used to jump between three different apps to track my habits, mood, and daily thoughts. Mindscrawl’s life-tracking section finally put my internal world in one place.",
        name: "Aria Thorne",
        role: "Wellness Tech Consultant",
        image: "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
    },
    {
        id: 6,
        quote: "Most 'AI features' are just chatbots tacked onto a page. Mindscrawl integrates AI into the blocks themselves, transforming my raw data into structured insights automatically.",
        name: "Dr. Kenji Sato",
        role: "Systems Designer",
        image: "https://media.istockphoto.com/id/1411428110/photo/young-businessman-portrait.jpg?s=612x612&w=0&k=20&c=t4Pd4t9opr2Be1w4Zhonf75Ys2jbfKZrQbDzKnvvqeg="
    },
    {
        id: 7,
        quote: "Whether I’m drafting a feature article or archiving my personal history, Mindscrawl treats my words with the respect they deserve. It’s a digital sanctuary for my stories.",
        name: "Maya Holloway",
        role: "Biographer & Creative Director",
        image: "https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg"
    }
];

export const COMPANY_LOGOS: company_index[] = [
    {id: 1, src: FaApple, alt: "Apple"},
    {id: 1, src: FaGoogle, alt: "Google"},
    {id: 1, src: FaMeta, alt: "Meta"},
    {id: 1, src: FaAmazon, alt: "Amazon"},
    {id: 1, src: FaMicrosoft, alt: "Microsoft"},
];

export const WHY_FEATURES: whyfeatures[] = [
    {
        id: 1,
        icon: Lock,
        title: "100% Private",
        desc: "Your data stays on your device. No tracking, no cloud required."
    },
    {
        id: 2,
        icon: Zap,
        title: "Instant & Offline",
        desc: "Lightning fast, works everywhere — even without internet."
    },
    {
        id: 3,
        icon: Palette,
        title: "Beautiful by Default",
        desc: "Crafted with care. Every detail feels premium and intentional."
    },
    {
        id: 4,
        icon: Heart,
        title: "Yours Forever",
        desc: "Open format, local storage. You own your data, always."
    },
]
export const TEMPLATES: templates_data[] = [
    {
        id: 1,
        title: "Student Dashboard",
        desc: "A centralized hub for academic success and course management.",
        desc_1: "Track your semester schedule, assignment deadlines, and GPA progress in one view.",
        desc_2: "Includes dedicated sections for lecture notes, research links, and exam preparation checklists.",
        desc_3: "Designed to reduce academic stress by organizing all student life components digitally.",
        src: "/assets/templates/school_dashboard.jpg"
    },
    {
        id: 2,
        title: "Developer Wiki",
        desc: "A collaborative technical documentation repository for engineering teams.",
        desc_1: "Document system architecture, API endpoints, and deployment procedures efficiently.",
        desc_2: "Features code snippet blocks, environment setup guides, and troubleshooting logs.",
        desc_3: "Helps maintain a single source of truth for codebase standards and onboarding documents.",
        src: "/assets/templates/wiki.jpg"
    },
    {
        id: 3,
        title: "Personal Journal",
        desc: "A private digital space for daily reflections and mindfulness.",
        desc_1: "Capture daily thoughts, mood tracking, and long-term personal goals in a clean interface.",
        desc_2: "Organized by date and category, allowing you to revisit past entries and track growth.",
        desc_3: "Includes prompts for morning pages and evening gratitude sessions.",
        src: "/assets/templates/journal.jpg"
    },
    {
        id: 4,
        title: "Team Project Hub",
        desc: "The ultimate command center for managing complex group projects.",
        desc_1: "Assign tasks, set milestones, and monitor team progress with visual status indicators.",
        desc_2: "Integrates meeting notes, file storage links, and stakeholder contact information.",
        desc_3: "Optimized for agile workflows, ensuring everyone stays aligned on project deliverables.",
        src: "/assets/templates/team.jpg"
    },
    {
        id: 5,
        title: "Content Calendar",
        desc: "Streamline your social media and marketing strategy visually.",
        desc_1: "Plan, schedule, and track content across multiple platforms like LinkedIn, Blog, and YouTube.",
        desc_2: "Manage production pipelines from ideation and drafting to final publishing.",
        desc_3: "Includes tags for content pillars, campaign tracking, and publication status updates.",
        src: "/assets/templates/content_calendar.jpg"
    },
    {
        id: 6,
        title: "Habit Tracker",
        desc: "Build consistency and achieve your lifestyle goals through visual tracking.",
        desc_1: "Log daily habits such as exercise, hydration, and reading to visualize your streaks.",
        desc_2: "Features monthly progress charts to identify patterns and areas for improvement.",
        desc_3: "Uses a simple checkbox system to keep you motivated and accountable every single day.",
        src: "/assets/templates/habit_tracker.jpg"
    }
];

export const MILESTONES: milestones_data[] = [
    {id: 1, icon: UsersRound, value: 10, suffix: "K+", label: "Active Users"},
    {id: 2, icon: NotebookPen, value: 500, suffix: "K+", label: "Notes Created"},
    {id: 3, icon: ClockArrowUp, value: 99.9, suffix: "%", label: "Uptime"},
    {id: 4, icon: Star, value: 4.9, suffix: "★", label: "Average Rating"},
]

export const TIMELINE:timeline_data[] = [
    {

        id:1,
        date: "Jan 2025",
        title: "MindScrawl Launched",
        desc: "Debuted with a polished public beta featuring a beautiful note editor, bidirectional linking, offline-first sync, and full cross-platform support.",

        icon: Rocket,        },
    {

        id:2,
        date: "Mar 2025",
        title: "Databases Added",
        desc: "Flexible views, relations, and powerful filtering",

        icon:DatabaseZap,        },
    {

       id:3,
        date: "Jun 2025",
        title: "AI Integration",
        desc: "Smart summarization, writing assistance & suggestions",

        icon:AtomIcon,        },
    {

       id:4,
        date: "Oct 2025",
        title: "Templates Marketplace",
        desc: "Thousands of community-shared templates",

        icon:LucideNewspaper,        },
    {

       id:5,
        date: "Jan 2026",
        title: "Today",
        desc: "10,000+ active creators building their second brain",

        icon:LucideClock1,        },
    {

       id:6,
        date: "Q2 2026",
        title: "Mobile Apps",
        desc: "Native iOS & Android apps with offline sync",

        icon:LucideMonitorSmartphone,        },
    {

       id:7,
        date: "Q3 2026",
        title: "Public API & Plugins",
        desc: "Extend MindScrawl with custom integrations",

        icon:GitMerge,        },
    {

        id:8,
        date: "2027+",
        title: "The Future",
        desc: "Collaborative workspaces, VR notes & endless innovation",

        icon:Globe,        },
];