/* ─────────────────────────────────────────────────────────────
   FreightBooks – Central data file for the landing page & docs.
   Edit this file to update any copy, links, or module listings.
───────────────────────────────────────────────────────────── */

// ── Navbar ──────────────────────────────────────────────────
export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#modules", label: "Modules" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#video-demo", label: "Demo" },
] as const;

// ── Hero ─────────────────────────────────────────────────────
export const heroBadges = [
  { label: "Freight Operations", className: "bg-blue-500/20 text-blue-300 border border-blue-500/30" },
  { label: "Full Accounting",    className: "bg-orange-500/20 text-orange-300 border border-orange-500/30" },
  // { label: "Real-time GPS",      className: "bg-green-500/20 text-green-300 border border-green-500/30" },
];

export const heroStats = [
  { value: "28+",       label: "API Services"   },
  { value: "100%",      label: "TypeScript"      },
  // { value: "Real-time", label: "GPS Tracking"    },
  { value: "Full",      label: "Accounting"      },
];

// ── Features Showcase ─────────────────────────────────────────
export interface Feature {
  id: string;
  badgeLabel: string;
  badgeClassName: string;
  title: string;
  description: string;
  bullets: string[];
  bulletColor: string;
  /** Path to screenshot inside /public, e.g. "/images/load-board.png" */
  imageSrc: string;
  imageAlt: string;
  /** If true, image appears on the LEFT and text on the RIGHT */
  reverse: boolean;
}

export const features: Feature[] = [
  {
    id: "load-management",
    badgeLabel: "Core Feature",
    badgeClassName: "bg-orange-100 text-orange-700",
    title: "Load Management",
    description:
      "Dispatch loads from a central board. Assign carriers, drivers, set pickup/delivery stops, attach rate confirmations, and track status in real-time from Draft to Paid.",
    bullets: [
      "Full load lifecycle — Draft → Invoiced → Paid",
      "Assign carriers & drivers per load",
      "Rate confirmation PDF generation & email",
      "Real-time status via Socket.io",
      "Column customization & bulk actions",
    ],
    bulletColor: "text-blue-500",
    imageSrc: "/images/load-board.png",
    imageAlt: "FreightBooks Load Board - dispatch and track freight loads",
    reverse: false,
  },
  {
    id: "invoicing",
    badgeLabel: "Financial",
    badgeClassName: "bg-teal-100 text-teal-700",
    title: "Invoicing & Billing",
    description:
      "Generate branded PDF invoices directly from loads. Add line items, taxes, and send automated payment reminder emails. Track every invoice from Draft to Paid.",
    bullets: [
      // "One-click load-to-invoice conversion",
      "Branded PDF Generated",
      "Auto email reminders on due dates",
      // "Credit & debit note adjustments",
      "Full AR reconciliation & aging",
    ],
    bulletColor: "text-teal-500",
    imageSrc: "/images/invoicing.png",
    imageAlt: "FreightBooks Invoicing - generate and send PDF invoices",
    reverse: true,
  },
  {
    id: "dashboard",
    badgeLabel: "Analytics",
    badgeClassName: "bg-cyan-100 text-cyan-700",
    title: "Real-time Dashboard",
    description:
      "Get a bird's-eye view of your freight business. Monitor load stats, revenue vs expenses, AR/AP balances, and sales trends — all updated in real time.",
    bullets: [
      "P&L chart — revenue vs expenses monthly",
      "AR & AP aging by bucket",
      "Load status KPI cards",
      "Sales trend by week/month/quarter",
      "Quick-action shortcuts",
    ],
    bulletColor: "text-cyan-500",
    imageSrc: "/images/dashboard.png",
    imageAlt: "FreightBooks Dashboard - real-time KPIs and analytics",
    reverse: false,
  },
  // {
  //   id: "truck-tracking",
  //   badgeLabel: "Operations",
  //   badgeClassName: "bg-violet-100 text-violet-700",
  //   title: "Live GPS Truck Tracking",
  //   description:
  //     "Track every active truck on a live map. Drivers push GPS updates via the mobile app, giving you real-time ETAs, breadcrumb history, and geofence alerts.",
  //   bullets: [
  //     "Real-time position via Socket.io WebSocket",
  //     "Full location history per load",
  //     "ETA calculation from current position",
  //     "Geofence alerts at pickup & delivery",
  //     "All-trucks overview map",
  //   ],
  //   bulletColor: "text-violet-500",
  //   imageSrc: "/images/gps-tracking.png",
  //   imageAlt: "FreightBooks GPS Tracking – live truck location map",
  //   reverse: true,
  // },
  {
    id: "financial-reports",
    badgeLabel: "Reports",
    badgeClassName: "bg-amber-100 text-amber-700",
    title: "Financial Reports",
    description:
      "Full double-entry accounting with standard financial statements. Export Profit & Loss, Balance Sheet, AR/AP Aging, and Tax reports as PDF or CSV on demand.",
    bullets: [
      "Profit & Loss with COGS & net income",
      "Balance Sheet snapshot at any date",
      "AR & AP aging by customer/carrier",
      "Cash Flow statement",
      "CSV & PDF export for any report",
    ],
    bulletColor: "text-amber-500",
    imageSrc: "/images/reports.png",
    imageAlt: "FreightBooks Financial Reports - P&L, balance sheet, aging",
    reverse: false,
  },
];

// ── Modules Grid ──────────────────────────────────────────────
export interface Module {
  icon: string;
  title: string;
  desc: string;
}

export const modules: Module[] = [
  { icon: "🚛", title: "Load Management",    desc: "Dispatch & track freight loads"   },
  { icon: "👥", title: "Customer CRM",        desc: "Shippers, contacts & AR"          },
  { icon: "🏢", title: "Carrier Management",  desc: "Carrier profiles & AP"            },
  { icon: "🚗", title: "Driver Management",   desc: "Drivers, trucks & VIN lookup"     },
  { icon: "🧾", title: "Invoicing",           desc: "PDF invoices & billing"           },
  { icon: "💳", title: "Payments",            desc: "AR/AP recording & terms"          },
  { icon: "📊", title: "Dashboard",           desc: "KPIs & real-time charts"          },
  { icon: "📈", title: "Financial Reports",   desc: "P&L, balance sheet, aging"        },
  { icon: "💰", title: "Expense Tracking",    desc: "Costs & vendor bills"             },
  { icon: "📚", title: "Chart of Accounts",   desc: "Double-entry bookkeeping"         },
  { icon: "🗒️", title: "Journal Entries",     desc: "Manual accounting entries"        },
  { icon: "📝", title: "Credit/Debit Notes",  desc: "Invoice adjustments"              },
  { icon: "📁", title: "Documents",           desc: "BOL, POD, contracts"              },
  // { icon: "📍", title: "GPS Tracking",        desc: "Live truck locations"             },
  { icon: "🗺️", title: "Locations",           desc: "Pickup/delivery addresses"        },
  { icon: "🔔", title: "Notifications",       desc: "Real-time alerts & emails"        },
  { icon: "🔐", title: "Auth & Roles",        desc: "JWT & RBAC security"              },
  { icon: "🏭", title: "Company Settings",    desc: "Profile & defaults"               },
  { icon: "⚙️", title: "Custom Fields",       desc: "Dynamic form fields"              },
  { icon: "💹", title: "Rating Reports",      desc: "Lane & carrier ratings"           },
  { icon: "🚘", title: "VIN Lookup",          desc: "Vehicle identification"           },
  { icon: "🛡️", title: "SAFER Lookup",        desc: "FMCSA carrier safety"             },
  { icon: "📦", title: "Products",            desc: "Service catalog"                  },
  { icon: "📅", title: "Payment Terms",       desc: "Net-30/60 & custom"              },
];

// ── How It Works ──────────────────────────────────────────────
export interface HowItWorksStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export const howItWorks: HowItWorksStep[] = [
  {
    step: "01",
    icon: "🚛",
    title: "Create a Load",
    desc: "Enter pickup/delivery details, assign a carrier and driver, set the rate, and dispatch.",
  },
  {
    step: "02",
    icon: "📍",
    title: "Track in Transit",
    desc: "Monitor the truck's live GPS position. Get ETA updates and delivery confirmation automatically.",
  },
  {
    step: "03",
    icon: "🧾",
    title: "Generate Invoice",
    desc: "One click converts the delivered load into a professional PDF invoice sent directly to the customer.",
  },
  {
    step: "04",
    icon: "💰",
    title: "Collect & Report",
    desc: "Record the payment, reconcile AR, and see it reflected in your P&L and cash flow reports instantly.",
  },
];

// ── Docs page sections ─────────────────────────────────────────
export interface DocsSection {
  id: string;
  label: string;
  badge: string;
}

export const docsSections: DocsSection[] = [
  { id: "load-management",    label: "Load Management",       badge: "bg-orange-100 text-orange-700"  },
  { id: "customer-management",label: "Customer Management",   badge: "bg-green-100 text-green-700"    },
  { id: "carrier-management", label: "Carrier Management",    badge: "bg-purple-100 text-purple-700"  },
  { id: "invoicing",          label: "Invoicing & Billing",   badge: "bg-teal-100 text-teal-700"      },
  { id: "payments",           label: "Payment Management",    badge: "bg-emerald-100 text-emerald-700"},
  { id: "financial-reports",  label: "Financial Reports",     badge: "bg-amber-100 text-amber-700"    },
  { id: "dashboard",          label: "Dashboard & Analytics", badge: "bg-cyan-100 text-cyan-700"      },
  // { id: "truck-tracking",     label: "Truck Tracking (GPS)",  badge: "bg-violet-100 text-violet-700"  },
  { id: "document-management",label: "Document Management",   badge: "bg-pink-100 text-pink-700"      },
  { id: "authentication",     label: "Auth & Security",       badge: "bg-slate-100 text-slate-700"    },
  { id: "api-reference",      label: "API Reference",         badge: "bg-blue-100 text-blue-700"      },
];

// ── Footer links ───────────────────────────────────────────────
export const footerLinks = [
  { href: "#features",     label: "Features"  },
  { href: "#modules",      label: "Modules"   },
  { href: "/docs",         label: "Docs",      external: false },
  { href: "#contact",      label: "Contact"   },
];

