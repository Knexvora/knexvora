export interface NavLink {
    label: string;
    href: string;
}

export interface FooterColumn {
    heading: string;
    links: { label: string; href: string }[];
}

export interface ServiceItem {
    id: number;
    icon: string;
    title: string;
    description: string;
    tags: string[];
    category: "academic" | "operations" | "finance" | "compliance" | "all";
}

export interface LeaderCard {
    initials: string;
    name: string;
    role: string;
    bio: string;
    bgColor: string;
}

export interface OfficeLocation {
    city: string;
    country: string;
    address: string[];
    type: "Headquarters" | "Regional Office";
}

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
}

export interface PrincipleItem {
    icon: string;
    title: string;
    description: string;
}

export interface TrustFeature {
    icon: string;
    title: string;
    description: string;
}

export interface ComparisonRow {
    criteria: string;
    knexvora: string;
    genericERP: string;
    legacyHE: string;
}

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    institution: string;
    role: string;
    message: string;
}