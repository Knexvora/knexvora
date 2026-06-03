import type {
    NavLink,
    ServiceItem,
    LeaderCard,
    OfficeLocation,
    TimelineItem,
    PrincipleItem,
    TrustFeature,
    ComparisonRow,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "Contact", href: "/contact" },
];

export const FOOTER_PLATFORM_LINKS = [
    { label: "Admissions", href: "/services" },
    { label: "Academic Management", href: "/services" },
    { label: "HR & Payroll", href: "/services" },
    { label: "Finance", href: "/services" },
    { label: "Library System", href: "/services" },
];

export const FOOTER_COMPANY_LINKS = [
    { label: "About Us", href: "/about" },
    { label: "Why KNEXVORA", href: "/why-us" },
    { label: "Careers", href: "#" },
    { label: "Press & Media", href: "#" },
];

export const FOOTER_SUPPORT_LINKS = [
    { label: "Contact Us", href: "/contact" },
    { label: "Request Demo", href: process.env.NEXT_PUBLIC_CAL_LINK || "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
];

export const SERVICES: ServiceItem[] = [
    {
        id: 1,
        icon: "person_add",
        title: "Admissions & Enrollment",
        description:
            "Digital application pipeline, document verification, merit-based shortlisting, and scholarship processing — built to eliminate manual overhead.",
        tags: ["Application Portal", "Document Check", "Scholarship"],
        category: "operations",
    },
    {
        id: 2,
        icon: "auto_stories",
        title: "Academic Management",
        description:
            "Curriculum design, examination scheduling, result computation, and transcript generation — structured for audit readiness and regulatory compliance.",
        tags: ["Curriculum", "Exams", "Results"],
        category: "academic",
    },
    {
        id: 3,
        icon: "badge",
        title: "HR & Payroll",
        description:
            "Recruitment to retirement — workload allocation, performance appraisals, leave tracking, and statutory-compliant payroll in one interface.",
        tags: ["Recruitment", "Payroll"],
        category: "operations",
    },
    {
        id: 4,
        icon: "account_balance",
        title: "Finance & Fee Management",
        description:
            "Multi-currency fee collection, budget forecasting, grant tracking, and audit-ready institutional reporting — built for complex revenue structures.",
        tags: ["Fee Collection", "Budgeting"],
        category: "finance",
    },
    {
        id: 5,
        icon: "monitoring",
        title: "Analytics & Reporting",
        description:
            "Leadership dashboards that surface enrollment patterns, operational bottlenecks, and performance trends — enabling proactive decisions.",
        tags: ["Dashboards", "Trends"],
        category: "academic",
    },
    {
        id: 6,
        icon: "verified",
        title: "Compliance & Accreditation",
        description:
            "Structured workflows for NAAC, UGC, and international frameworks — turning months of document preparation into a continuous process.",
        tags: ["NAAC", "Audit Trails"],
        category: "compliance",
    },
];

export const LEADERS: LeaderCard[] = [
    {
        initials: "RK",
        name: "Rajesh Kumar",
        role: "Co-Founder & CEO",
        bio: "20 years in enterprise software and higher education technology. Former VP at a leading EdTech firm before founding KNEXVORA.",
        bgColor: "bg-primary",
    },
    {
        initials: "PS",
        name: "Priya Sharma",
        role: "Co-Founder & CTO",
        bio: "Systems architect with deep expertise in ERP design. Leads all platform engineering and cloud infrastructure strategy.",
        bgColor: "bg-primary-container",
    },
    {
        initials: "AM",
        name: "Arjun Mehta",
        role: "Head of Implementations",
        bio: "Leads institutional onboarding and deployment. Has guided over 40 universities through full platform transitions.",
        bgColor: "bg-on-primary-fixed-variant",
    },
];

export const TIMELINE: TimelineItem[] = [
    {
        year: "2015",
        title: "Founded in Hyderabad",
        description:
            "KNEXVORA was incorporated with a focus on solving accreditation challenges for Indian universities.",
    },
    {
        year: "2017",
        title: "Core Platform Launched",
        description:
            "Academic management, HR, and finance modules went live across our first pilot institutions.",
    },
    {
        year: "2020",
        title: "International Expansion",
        description:
            "Platform extended to support multi-currency operations and international accreditation frameworks.",
    },
    {
        year: "2023",
        title: "AI & Analytics Layer",
        description:
            "Predictive dropout risk, enrollment forecasting, and AI-powered compliance reporting introduced.",
    },
];

export const PRINCIPLES: PrincipleItem[] = [
    {
        icon: "school",
        title: "Higher education only",
        description:
            "We serve no other industry. Our roadmap, our expertise, and our entire team is focused on universities and institutions of higher learning.",
    },
    {
        icon: "dashboard_customize",
        title: "Modular, not monolithic",
        description:
            "Adopt what you need today. Add modules as you grow. The architecture is unified — there's no integration tax for expanding your footprint.",
    },
    {
        icon: "speed",
        title: "90-day deployment",
        description:
            "Our structured implementation methodology has been tested across institutions of all sizes. You go live in 90 days without disrupting academic operations.",
    },
    {
        icon: "verified_user",
        title: "Compliance by design",
        description:
            "Regulatory frameworks are not an afterthought. NAAC, UGC, and accreditation workflows are embedded into the platform architecture.",
    },
    {
        icon: "insights",
        title: "Decision-ready data",
        description:
            "Leadership dashboards surface the information needed for institutional decisions — enrollment trends, resource utilisation, and operational efficiency.",
    },
    {
        icon: "handshake",
        title: "Accountable partnership",
        description:
            "We deploy alongside your team and stay engaged. A dedicated success manager is assigned for the duration of your contract — not just during rollout.",
    },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
    {
        criteria: "Industry Focus",
        knexvora: "✓ Purpose-built",
        genericERP: "✗ Adapted",
        legacyHE: "— Partial",
    },
    {
        criteria: "Architecture",
        knexvora: "✓ Full flexibility",
        genericERP: "✗ Bundled only",
        legacyHE: "— Limited",
    },
    {
        criteria: "Regulatory Compliance",
        knexvora: "✓ Embedded",
        genericERP: "✗ Manual",
        legacyHE: "— Basic",
    },
    {
        criteria: "Go-Live Timeline",
        knexvora: "✓ 90 days",
        genericERP: "12–18 months",
        legacyHE: "6–12 months",
    },
    {
        criteria: "Post-Live Support",
        knexvora: "✓ Always",
        genericERP: "✗ Ticketed support",
        legacyHE: "— On contract",
    },
];

export const TRUST_FEATURES: TrustFeature[] = [
    {
        icon: "cloud_off",
        title: "Deployment Freedom",
        description:
            "On-premise and private cloud deployment options. All data resides within your institution's defined boundaries, with full audit logging.",
    },
    {
        icon: "code_off",
        title: "Zero Code Forks",
        description:
            "No bespoke code forks. Every configuration is achieved through platform settings, ensuring you always benefit from the latest release.",
    },
    {
        icon: "architecture",
        title: "Hyper-Scalable",
        description:
            "From a single campus to a multi-university consortium — the architecture scales without additional licensing complexity.",
    },
    {
        icon: "gavel",
        title: "Compliance Updates",
        description:
            "Regulatory changes, new accreditation requirements, and compliance updates are released as part of the platform — at no additional cost.",
    },
];

export const OFFICE_LOCATIONS: OfficeLocation[] = [
    {
        city: "Hyderabad",
        country: "India",
        address: [
            "Level 4, Skyview Corporate Campus",
            "Hi-Tech City, Hyderabad — 500 081",
            "Telangana, India",
        ],
        type: "Headquarters",
    },
    {
        city: "Bangalore",
        country: "India",
        address: [
            "Prestige Tech Park, Tower B",
            "Outer Ring Road, Marathahalli",
            "Bangalore — 560 103",
        ],
        type: "Regional Office",
    },
    {
        city: "Dubai",
        country: "UAE",
        address: [
            "Dubai Internet City",
            "Building 12, Office 214",
            "Dubai, United Arab Emirates",
        ],
        type: "Regional Office",
    },
    {
        city: "London",
        country: "UK",
        address: [
            "1 Canada Square, Level 22",
            "Canary Wharf",
            "London E14 5AB, United Kingdom",
        ],
        type: "Regional Office",
    },
];

export const DEPLOYMENT_STEPS = [
    {
        step: "01",
        title: "Discovery",
        description:
            "We map your current workflows, governance structure, and regulatory obligations before a single configuration is made.",
    },
    {
        step: "02",
        title: "Configure",
        description:
            "Modules are configured to match your institution's structure, with data migration and legacy system handoff managed by our team.",
    },
    {
        step: "03",
        title: "Train",
        description:
            "Role-based training for administrators, faculty, finance, and operations staff — conducted on-site or remotely.",
    },
    {
        step: "04",
        title: "Go Live",
        description:
            "Hypercare support for the first 30 days post-launch. Your success manager is on call throughout the transition period.",
    },
];

export const INTEGRATIONS = [
    { icon: "mail", label: "Email & Calendar" },
    { icon: "payments", label: "Payment Gateways" },
    { icon: "cloud_done", label: "Cloud Storage" },
    { icon: "vpn_key", label: "SSO & Identity" },
];