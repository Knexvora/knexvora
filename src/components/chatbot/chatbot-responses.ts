export interface BotResponse {
  keywords: string[];
  answer: string;
  buttons?: { label: string; href: string; external?: boolean }[];
}

export const BOT_RESPONSES: BotResponse[] = [
  {
    keywords: ["hello", "hi", "hey", "start", "help"],
    answer:
      "Hello! I'm KNEX, KNEXVORA's assistant. I'm here to help you learn about our university management platform. What would you like to know?",
  },
  {
    keywords: ["what is knexvora", "about knexvora", "who are you", "tell me about"],
    answer:
      "KNEXVORA is an end-to-end university management platform built exclusively for higher education. Unlike generic ERPs adapted for academia, every module and workflow in KNEXVORA has been designed from first principles around how universities actually operate.",
    buttons: [
      { label: "Learn More", href: "/about" },
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["module", "modules", "features", "what do you offer", "platform", "services"],
    answer:
      "KNEXVORA offers 6 core modules built exclusively for higher education:\n\n01. Admissions & Enrollment\n02. Academic Management\n03. HR & Payroll\n04. Finance & Fee Management\n05. Analytics & Reporting\n06. Compliance & Accreditation\n\nEach module works independently or as part of the fully unified platform.",
    buttons: [
      { label: "Explore All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["admission", "admissions", "enrollment", "enroll", "apply", "application"],
    answer:
      "Our Admissions & Enrollment module covers the complete digital application pipeline — document verification, merit-based shortlisting, scholarship processing, and offer letter generation. Built to eliminate manual overhead entirely.",
    buttons: [
      { label: "See All Modules", href: "/services" },
      { label: "Book a Demo", href: process.env.NEXT_PUBLIC_CAL_LINK || "/contact", external: true },
    ],
  },
  {
    keywords: ["academic", "curriculum", "exam", "examination", "result", "transcript", "timetable"],
    answer:
      "Our Academic Management module handles curriculum design, examination scheduling, result computation, attendance tracking, and transcript generation — structured for audit readiness and full regulatory compliance.",
    buttons: [
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["hr", "payroll", "human resource", "faculty", "staff", "recruitment", "leave", "salary"],
    answer:
      "Our HR & Payroll module covers the entire employee lifecycle — from recruitment and onboarding through workload allocation, performance appraisals, leave management, and statutory-compliant payroll processing.",
    buttons: [
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["finance", "fee", "payment", "budget", "grant", "financial"],
    answer:
      "Our Finance & Fee Management module handles multi-currency fee collection, budget forecasting, grant tracking, and audit-ready institutional reporting — built for the complex revenue structures of higher education.",
    buttons: [
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["analytics", "reporting", "dashboard", "data", "insights", "trends"],
    answer:
      "Our Analytics & Reporting module gives leadership real-time dashboards surfacing enrollment patterns, operational bottlenecks, dropout risk indicators, and institutional performance trends — enabling proactive decisions.",
    buttons: [
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["compliance", "accreditation", "naac", "ugc", "nba", "nirf", "audit"],
    answer:
      "Our Compliance & Accreditation module provides structured workflows for NAAC, UGC, NBA, and international accreditation frameworks — turning months of document preparation into a continuous, automated process.",
    buttons: [
      { label: "See All Modules", href: "/services" },
    ],
  },
  {
    keywords: ["deploy", "deployment", "implementation", "how long", "go live", "timeline", "90 days"],
    answer:
      "KNEXVORA deploys in 90 days across 4 structured phases:\n\n01. Discovery — mapping your workflows\n02. Configure — setting up modules\n03. Train — role-based staff training\n04. Go Live — with 30 days hypercare support\n\nZero disruption to ongoing academic operations.",
    buttons: [
      { label: "See Our Process", href: "/why-us" },
    ],
  },
  {
    keywords: ["why knexvora", "why choose", "different", "compare", "vs", "better"],
    answer:
      "KNEXVORA was built from the ground up for higher education — not adapted from a generic ERP. Key differences:\n\n✓ Purpose-built for universities\n✓ Full deployment in 90 days\n✓ Compliance embedded by design\n✓ Dedicated success manager always\n✓ No bespoke code forks ever",
    buttons: [
      { label: "Why KNEXVORA", href: "/why-us" },
    ],
  },
  {
    keywords: ["demo", "book", "schedule", "trial", "see it", "show me", "walkthrough"],
    answer:
      "Great! We would love to show you KNEXVORA in action. Our demo sessions are 45 minutes, tailored specifically to your institution type and requirements.",
    buttons: [
      {
        label: "Book a Demo",
        href: process.env.NEXT_PUBLIC_CAL_LINK || "/contact",
        external: true,
      },
    ],
  },
  {
    keywords: ["contact", "email", "call", "reach", "talk", "speak", "team", "support"],
    answer:
      "You can reach the KNEXVORA team through:\n\n📧 hello@knexvora.com\n📞 +91 63059 17651\n\nWe respond to all enquiries within one business day.",
    buttons: [
      { label: "Contact Page", href: "/contact" },
    ],
  },
  {
    keywords: ["train", "training", "onboard", "onboarding", "learn"],
    answer:
      "KNEXVORA provides comprehensive role-based training for all staff — administrators, faculty, finance teams, and operations staff. Training is conducted on-site or remotely based on your preference.",
    buttons: [
      { label: "Our Process", href: "/why-us" },
    ],
  },
  {
    keywords: ["security", "data", "safe", "secure", "privacy", "cloud"],
    answer:
      "KNEXVORA takes data security seriously:\n\n✓ On-premise and private cloud options\n✓ All data within your institution boundaries\n✓ Full audit logging\n✓ Role-based access control\n✓ Data encrypted at rest and in transit",
    buttons: [
      { label: "Why KNEXVORA", href: "/why-us" },
    ],
  },
  {
    keywords: ["integration", "integrate", "existing", "system", "connect", "sso", "payment"],
    answer:
      "KNEXVORA integrates seamlessly with your existing systems:\n\n• Email & Calendar (Google, Microsoft)\n• Payment Gateways (Razorpay, PayU)\n• Cloud Storage (AWS, Azure, GCP)\n• SSO & Identity (LDAP, Active Directory)\n• Government Portals (NAD, DigiLocker)",
    buttons: [
      { label: "See All Integrations", href: "/services" },
    ],
  },
];

export const QUICK_REPLIES = [
  "What is KNEXVORA?",
  "See all modules",
  "Book a Demo",
  "How long to deploy?",
  "Contact team",
];

export const FALLBACK_RESPONSE: BotResponse = {
  keywords: [],
  answer:
    "I'm not sure about that, but our team would be happy to help! You can reach us directly or book a demo to see the platform in action.",
  buttons: [
    { label: "Contact Team", href: "/contact" },
    {
      label: "Book a Demo",
      href: process.env.NEXT_PUBLIC_CAL_LINK || "/contact",
      external: true,
    },
  ],
};

export function getBotResponse(input: string): BotResponse {
  const lower = input.toLowerCase().trim();
  for (const response of BOT_RESPONSES) {
    if (response.keywords.some((kw) => lower.includes(kw))) {
      return response;
    }
  }
  return FALLBACK_RESPONSE;
}