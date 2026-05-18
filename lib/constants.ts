/**
 * Branding constants extracted from freightbooks-crm
 */

export const BRAND_COLORS = {
  primary: "#383e4b",
  primaryLight: "#475569",
  primaryDark: "#2d3440",
  accent: "#00c9a7",
  accentLight: "#33d4b8",
  accentDark: "#00a08c",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

export const COMPANY_TYPES = {
  BROKER: "Broker",
  DISPATCH: "Dispatch",
  REPAIR: "Repair Shop",
} as const;

export const FEATURES = [
  {
    icon: "Truck",
    title: "Load Management",
    description: "Track and manage freight loads from pickup to delivery with real-time status updates.",
  },
  {
    icon: "FileText",
    title: "Invoicing & Billing",
    description: "Create professional invoices, track payments, and manage accounts receivable/payable.",
  },
  {
    icon: "Users",
    title: "Customer & Carrier Portal",
    description: "Manage customers, carriers, and drivers with comprehensive profiles and ratings.",
  },
  {
    icon: "BarChart3",
    title: "Financial Reports",
    description: "Generate detailed financial reports including P&L, balance sheets, and aging reports.",
  },
  {
    icon: "Shield",
    title: "SAFER Integration",
    description: "Access FMCSA SAFER database for carrier safety ratings and compliance checks.",
  },
  {
    icon: "Wrench",
    title: "VIN Lookup",
    description: "Decode VIN numbers for repair shops with vehicle history and ownership tracking.",
  },
] as const;

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: 49,
    description: "Perfect for small operations",
    features: [
      "Up to 5 users",
      "100 loads/month",
      "Basic invoicing",
      "Email support",
      "Standard reports",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: 99,
    description: "For growing businesses",
    features: [
      "Up to 20 users",
      "Unlimited loads",
      "Advanced invoicing",
      "Priority support",
      "Custom reports",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 249,
    description: "For large organizations",
    features: [
      "Unlimited users",
      "Unlimited loads",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
      "Advanced analytics",
    ],
    popular: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "John Smith",
    role: "Operations Manager",
    company: "Smith Logistics",
    content: "FreightBooks has transformed how we manage our operations. The load tracking and invoicing features have saved us countless hours.",
    avatar: "/images/testimonials/john-smith.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Owner",
    company: "Johnson Dispatch",
    content: "The best transportation management software we've used. The customer support is exceptional and the features are exactly what we need.",
    avatar: "/images/testimonials/sarah-johnson.jpg",
  },
  {
    name: "Michael Brown",
    role: "CFO",
    company: "Brown Transport",
    content: "Financial reporting has never been easier. The P&L and aging reports give us complete visibility into our business health.",
    avatar: "/images/testimonials/michael-brown.jpg",
  },
] as const;

export const FAQS = [
  {
    question: "What is FreightBooks?",
    answer: "FreightBooks is a comprehensive transportation service accounting system designed for brokers, dispatchers, and repair shops. It helps manage loads, invoicing, customers, carriers, and financial reporting all in one platform.",
  },
  {
    question: "How does the pricing work?",
    answer: "We offer three pricing tiers: Starter ($49/month), Professional ($99/month), and Enterprise ($249/month). Each tier includes different features and user limits. You can upgrade or downgrade at any time.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a 15-day free trial on our Starter plan. No credit card required to start. You'll have full access to all features during the trial period.",
  },
  {
    question: "What types of businesses use FreightBooks?",
    answer: "FreightBooks is designed for brokers, dispatch services, and repair shops in the transportation industry. Our platform supports BROKER, DISPATCH, and REPAIR company types with specialized features for each.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use industry-standard encryption for data at rest and in transit. Our platform includes role-based access control, audit logs, and regular security audits to protect your data.",
  },
  {
    question: "Can I import my existing data?",
    answer: "Yes, we support CSV imports for customers, carriers, and other data. Our team can also assist with data migration from other systems during onboarding.",
  },
] as const;

export const STATS = [
  { value: "10K+", label: "Active Users" },
  { value: "500K+", label: "Loads Managed" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Twitter", href: "https://twitter.com/freightbooks", icon: "Twitter" },
  { name: "LinkedIn", href: "https://linkedin.com/company/freightbooks", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/freightbooks", icon: "Github" },
] as const;
