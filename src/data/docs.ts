/* ─────────────────────── TYPES ─────────────────────── */

export type IconName =
  | "TruckIcon"
  | "DollarIcon"
  | "ChartIcon"
  | "UsersIcon"
  | "DocumentIcon"
  | "CogIcon"
  | "ShieldIcon"
  | "BellIcon"
  | "MapPinIcon"
  | "ApiIcon";

export interface HeroCardEntry { icon: IconName; title: string; desc: string }
export interface HeroData { description: string; cards: HeroCardEntry[]; techStack: string[] }
export enum LoadStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  DISPATCHED = 'Dispatched',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
  INSTRANSIT = 'In Transit',
  ClaimedDelivered='Claimed & Delivered',
  Claimed='Claimed'

}
export interface FeatureEntry { title: string; desc: string }
export interface StatusEntry { label: string; color: string }
export interface CodeBlockEntry { heading?: string; language: string; code: string }
export interface NoteEntry {
  type: "warning" | "info";
  label: string;
  beforeCode?: string;
  code?: string;
  afterCode?: string;
}
export interface SectionEntry {
  id: string;
  icon: IconName;
  title: string;
  subtitle: string;
  badgeText?: string;
  badgeClass?: string;
  featuresHeading?: string;
  features: FeatureEntry[];
  statusesHeading?: string;
  statuses?: StatusEntry[];
  codeBlocks?: CodeBlockEntry[];
  notes?: NoteEntry[];
}

/* ─────────────────────── HERO DATA ─────────────────────── */

export const heroData: HeroData = {
  description:
    "FreightBooks is a complete Transport Service Accounting System that combines freight operations management with full double-entry accounting, real-time tracking, and intelligent reporting — built for freight brokers, trucking companies, and logistics providers.",
  cards: [
    { icon: "TruckIcon", title: "Freight Operations", desc: "Load management, dispatch, rate confirmations, BOL/POD" },
    { icon: "DollarIcon", title: "Full Accounting", desc: "AR, AP, P&L, balance sheet, journal entries" },
    { icon: "ChartIcon", title: "Analytics", desc: "Real-time dashboard, aging reports, profit analysis" },
  ],
  techStack: [
    "Node.js + Express", "TypeScript", "MongoDB + Mongoose", "React + Vite",
    "Redux Toolkit", "Socket.io (Real-time)", "BullMQ (Queues)", "Redis",
    "JWT Auth", "Puppeteer (PDF)", "Swagger UI",
  ],
};

/* ─────────────────────── DOC SECTIONS ─────────────────────── */

export const docSections: SectionEntry[] = [
  {
    id: "getting-started",
    icon: "CogIcon",
    title: "Getting Started",
    subtitle: "Prerequisites, environment setup, and running the FreightBooks API & CRM locally.",
    badgeText: "Setup",
    badgeClass: "bg-green-100 text-green-700",
    featuresHeading: "Prerequisites",
    features: [
      { title: "Node.js ≥ 18", desc: "Required for both API and CRM" },
      { title: "MongoDB", desc: "Primary database — local or Atlas" },
      { title: "Redis", desc: "Session cache & BullMQ job queues" },
      { title: "RabbitMQ (optional)", desc: "AMQP-based message broker for events" },
    ],
    codeBlocks: [
      {
        heading: "API Server",
        language: "bash",
        code: `# 1. Install dependencies
npm install

# 2. Copy environment file and configure
cp .env.example .env

# 3. Start development server
npm run dev

# API is available at http://localhost:5000`,
      },
      {
        heading: "CRM (Frontend)",
        language: "bash",
        code: `# In the freightbooks-crm directory
npm install
npm run dev

# CRM runs at http://localhost:5173`,
      },
    ],
    notes: [
      {
        type: "warning",
        label: "Note:",
        beforeCode: "All API responses are encrypted using ",
        code: "crypto-js",
        afterCode: ". The CRM automatically handles encryption/decryption via axios interceptors.",
      },
    ],
  },
  {
    id: "load-management",
    icon: "TruckIcon",
    title: "Load Management",
    subtitle: "Create, assign, and track freight loads from pickup through delivery, invoicing, and payment collection.",
    badgeText: "Core",
    badgeClass: "bg-orange-100 text-orange-700",
    statusesHeading: "Load Lifecycle",
    statuses: [
     { label: LoadStatus.PENDING, color: "border-yellow-300 text-yellow-700 bg-yellow-50" },
      { label: LoadStatus.IN_PROGRESS, color: "border-blue-300 text-blue-700 bg-blue-50" },
      { label: LoadStatus.INSTRANSIT, color: "border-indigo-300 text-indigo-700 bg-indigo-50" },
      { label: LoadStatus.DELIVERED, color: "border-green-300 text-green-700 bg-green-50" },
      { label: LoadStatus.ClaimedDelivered, color: "border-purple-300 text-purple-700 bg-purple-50" },
      { label: LoadStatus.Claimed, color: "border-emerald-300 text-emerald-700 bg-emerald-50" },
      { label: LoadStatus.CANCELLED, color: "border-red-300 text-red-700 bg-red-50" },
    ],
    features: [
      { title: "Multi-stop Loads", desc: "Configure pickup and delivery stops with dates, locations & contacts" },
      { title: "Rate Confirmations", desc: "Generate and email PDF rate confirmation to carriers" },
      { title: "BOL / POD", desc: "Attach Bill of Lading and Proof of Delivery documents" },
      { title: "Driver Assignment", desc: "Assign drivers and carriers directly from the load form" },
      { title: "Load Cloning", desc: "Duplicate existing loads to speed up dispatching" },
      { title: "Column Customization", desc: "Toggle visible columns on the load board table" },
      { title: "Bulk Actions", desc: "Update status or export multiple loads at once" },
      { title: "Real-time Status", desc: "Live status updates via Socket.io push notifications" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET    /api/loads              - List loads (paginated, filtered)
POST   /api/loads              - Create new load
GET    /api/loads/:id          - Get load details
PUT    /api/loads/:id          - Update load
DELETE /api/loads/:id          - Delete load
POST   /api/loads/:id/clone    - Clone a load
GET    /api/loads/:id/rate-pdf - Download rate confirmation PDF`,
      },
    ],
  },
  {
    id: "customer-management",
    icon: "UsersIcon",
    title: "Customer Management",
    subtitle: "Manage customer (shipper) profiles, billing contacts, payment terms, and accounts receivable.",
    badgeText: "Core",
    badgeClass: "bg-orange-100 text-orange-700",
    features: [
      { title: "Customer Profiles", desc: "Company name, address, billing info, credit limits" },
      { title: "Contact Persons", desc: "Multiple contacts per customer with roles and direct lines" },
      { title: "Payment Terms", desc: "Assign Net-30, Net-60, COD, or custom terms per customer" },
      { title: "AR Tracking", desc: "Outstanding invoices and balance summary per customer" },
      { title: "Customer Portal", desc: "Send invoice links and payment reminders via email" },
      { title: "Load History", desc: "View all loads and invoices tied to a customer" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/customers           - List all customers
POST /api/customers           - Create customer
GET  /api/customers/:id       - Customer details + AR summary
PUT  /api/customers/:id       - Update customer
GET  /api/contact-persons     - List contacts for a customer`,
      },
    ],
  },
  {
    id: "carrier-management",
    icon: "TruckIcon",
    title: "Carrier Management",
    subtitle: "Manage carrier (trucking company) profiles, compliance, accounts payable, and contact persons.",
    badgeText: "Core",
    badgeClass: "bg-orange-100 text-orange-700",
    features: [
      { title: "Carrier Profiles", desc: "MC number, DOT, address, insurance details" },
      { title: "SAFER Integration", desc: "Look up FMCSA SAFER carrier safety data by DOT number" },
      { title: "AP Tracking", desc: "Outstanding bills and payment history per carrier" },
      { title: "Contact Persons", desc: "Dispatch contacts and accounting contacts per carrier" },
      { title: "Carrier Rating", desc: "Track on-time performance and reliability scores" },
      { title: "Document Storage", desc: "Store W-9, insurance certificates, carrier agreements" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/carriers            - List carriers
POST /api/carriers            - Create carrier
GET  /api/carriers/:id        - Carrier details + AP summary
GET  /api/safer/lookup/:dot   - FMCSA SAFER lookup by DOT
GET  /api/carrier-contact-persons - Carrier contacts`,
      },
    ],
  },
  {
    id: "driver-management",
    icon: "UsersIcon",
    title: "Driver Management",
    subtitle: "Maintain driver records, license info, load assignments, and vehicle details.",
    features: [
      { title: "Driver Profiles", desc: "License number, class, expiry, contact info" },
      { title: "Load Assignment", desc: "Assign drivers to specific loads with truck details" },
      { title: "VIN Lookup", desc: "Decode vehicle details by VIN number automatically" },
      { title: "Truck Information", desc: "Store truck make, model, year, plate, and license" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/drivers             - List drivers
POST /api/drivers             - Add driver
GET  /api/drivers/:id         - Driver profile
GET  /api/vin/lookup/:vin     - VIN decode`,
      },
    ],
  },
  {
    id: "invoicing",
    icon: "DocumentIcon",
    title: "Invoicing & Billing",
    subtitle: "Create professional invoices from loads, manage line items, taxes, and send automated email reminders.",
    badgeText: "Financial",
    badgeClass: "bg-teal-100 text-teal-700",
    features: [
      { title: "Load-to-Invoice", desc: "One-click invoice generation from a completed load" },
      { title: "Line Items", desc: "Freight charge, fuel surcharge, accessorial fees, custom lines" },
      { title: "Tax Calculation", desc: "Apply configurable tax rates per line item or total" },
      { title: "PDF Generation", desc: "Puppeteer-rendered, branded PDF invoices" },
      { title: "Email Reminders", desc: "Automated reminder emails on payment due dates" },
      { title: "Invoice Status", desc: "Draft → Sent → Partial → Paid → Void lifecycle" },
      { title: "Credit Notes", desc: "Offset invoices with credit or debit note adjustments" },
      { title: "Multi-currency", desc: "Support for multiple currencies per invoice" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/accounts            - List invoices / bills
POST /api/accounts            - Create invoice or vendor bill
GET  /api/accounts/:id        - Invoice details
PUT  /api/accounts/:id        - Update invoice
GET  /api/accounts/:id/pdf    - Download invoice PDF
POST /api/accounts/:id/email  - Send invoice email`,
      },
    ],
  },
  {
    id: "payments",
    icon: "DollarIcon",
    title: "Payment Management",
    subtitle: "Record customer payments and carrier bill payments, with full AR/AP reconciliation.",
    badgeText: "Financial",
    badgeClass: "bg-teal-100 text-teal-700",
    features: [
      { title: "Payment Recording", desc: "Log ACH, check, wire, or credit card payments" },
      { title: "Partial Payments", desc: "Apply partial payments and track outstanding balances" },
      { title: "Payment Terms", desc: "Net-15/30/60, COD, immediate — per customer or carrier" },
      { title: "AR Aging", desc: "Current, 30, 60, 90+ day aging buckets for receivables" },
      { title: "AP Aging", desc: "Current, 30, 60, 90+ day aging buckets for payables" },
      { title: "Payment History", desc: "Full audit trail per invoice with timestamps" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/payments            - Payment history
POST /api/payments            - Record new payment
GET  /api/payment-terms       - List payment terms
POST /api/payment-terms       - Create custom terms`,
      },
    ],
  },
  {
    id: "expenses",
    icon: "DollarIcon",
    title: "Expense Tracking",
    subtitle: "Track operational and overhead expenses with category management and vendor bill support.",
    badgeText: "Financial",
    badgeClass: "bg-teal-100 text-teal-700",
    features: [
      { title: "Expense Categories", desc: "Fuel, maintenance, insurance, office, and custom categories" },
      { title: "Vendor Bills", desc: "Record bills from vendors and track AP" },
      { title: "Expense Fees", desc: "Pre-defined fee types for quick expense entry" },
      { title: "Receipt Attachments", desc: "Attach scanned receipts or invoice documents" },
      { title: "Expense Reports", desc: "Filter by category, date, or vendor for reporting" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/expenses            - List expenses
POST /api/expenses            - Create expense
GET  /api/expense-fees        - Expense fee categories`,
      },
    ],
  },
  {
    id: "chart-of-accounts",
    icon: "ChartIcon",
    title: "Chart of Accounts",
    subtitle: "Maintain a full double-entry accounting chart of accounts with journal entries and general ledger.",
    badgeText: "Financial",
    badgeClass: "bg-teal-100 text-teal-700",
    features: [
      { title: "Account Hierarchy", desc: "Assets, Liabilities, Equity, Revenue, Expenses" },
      { title: "Journal Entries", desc: "Manual double-entry journal records with debit/credit" },
      { title: "Auto-posting", desc: "Invoices and payments automatically post to the ledger" },
      { title: "Account Balances", desc: "Real-time debit/credit balance per account" },
      { title: "Bank Reconciliation", desc: "Reconcile bank statements against ledger entries" },
      { title: "Transactions Ledger", desc: "Full transaction history filterable by account" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/chart-accounts      - Account list
POST /api/chart-accounts      - Create account
GET  /api/journal-entries     - Journal entries
POST /api/journal-entries     - Create manual journal
GET  /api/transactions        - Transactions ledger`,
      },
    ],
  },
  {
    id: "credit-debit-notes",
    icon: "DocumentIcon",
    title: "Credit & Debit Notes",
    subtitle: "Issue credit notes to reduce invoice amounts and debit notes to charge customers for adjustments.",
    badgeText: "Financial",
    badgeClass: "bg-teal-100 text-teal-700",
    features: [
      { title: "Credit Notes", desc: "Reduce a customer's outstanding invoice balance" },
      { title: "Debit Notes", desc: "Increase a customer's balance for adjustments" },
      { title: "Auto-application", desc: "Automatically apply credit notes to open invoices" },
      { title: "PDF & Email", desc: "Generate and email PDF credit/debit note documents" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/credit-debit-notes  - List notes
POST /api/credit-debit-notes  - Create credit or debit note
GET  /api/credit-debit-notes/:id  - Note details`,
      },
    ],
  },
  {
    id: "dashboard",
    icon: "ChartIcon",
    title: "Dashboard Overview",
    subtitle: "Real-time visual dashboard showing load statistics, financial KPIs, and trend charts.",
    badgeText: "Analytics",
    badgeClass: "bg-cyan-100 text-cyan-700",
    features: [
      { title: "Load Status Cards", desc: "Count of active, in-transit, delivered, and invoiced loads" },
      { title: "Profit & Loss Chart", desc: "Monthly revenue vs expense trend line chart" },
      { title: "Accounts Receivable", desc: "Open AR balance by aging bucket — bar chart" },
      { title: "Accounts Payable", desc: "Open AP balance by carrier — bar chart" },
      { title: "Sales Chart", desc: "Revenue trend by week / month / quarter" },
      { title: "Expenses Chart", desc: "Expense breakdown by category — pie/donut chart" },
      { title: "Invoice Summary", desc: "Outstanding vs. collected invoice totals" },
      { title: "Quick Actions", desc: "Shortcuts to create load, invoice, or customer" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/dashboard/stats     - KPI counts (loads, invoices, AR, AP)
GET  /api/dashboard/charts    - Chart datasets for P&L, AR, AP, Sales`,
      },
    ],
  },
  {
    id: "financial-reports",
    icon: "ChartIcon",
    title: "Financial Reports",
    subtitle: "Generate standard financial reports including Profit & Loss, Balance Sheet, AR/AP aging, and tax summaries.",
    badgeText: "Analytics",
    badgeClass: "bg-cyan-100 text-cyan-700",
    features: [
      { title: "Profit & Loss", desc: "Revenue, COGS, gross profit, operating expenses, net income" },
      { title: "Balance Sheet", desc: "Assets, liabilities, and equity snapshot at any date" },
      { title: "AR Aging Report", desc: "Outstanding receivables by age bucket per customer" },
      { title: "AP Aging Report", desc: "Outstanding payables by age bucket per carrier/vendor" },
      { title: "Cash Flow Statement", desc: "Operating, investing, financing cash flows" },
      { title: "Tax Report", desc: "Tax collected and tax paid summary for filing" },
      { title: "Customer Revenue", desc: "Revenue breakdown per customer for a date range" },
      { title: "Carrier Cost", desc: "Total carrier cost breakdown for profitability" },
      { title: "CSV / PDF Export", desc: "Download any report as CSV or formatted PDF" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/reports/profit-loss          - P&L statement
GET  /api/reports/balance-sheet         - Balance sheet
GET  /api/reports/ar-aging              - AR aging buckets
GET  /api/reports/ap-aging              - AP aging buckets
GET  /api/reports/cash-flow             - Cash flow statement
GET  /api/reports/tax-summary           - Tax report`,
      },
    ],
  },
  {
    id: "rating-reports",
    icon: "ChartIcon",
    title: "Rating Reports",
    subtitle: "Analyze load pricing, lane profitability, and carrier performance ratings.",
    badgeText: "Analytics",
    badgeClass: "bg-cyan-100 text-cyan-700",
    features: [
      { title: "Lane Analysis", desc: "Profitability per origin-destination lane" },
      { title: "Carrier Performance", desc: "On-time delivery rate, damage claims, rejections" },
      { title: "Rate Per Mile", desc: "Average rate per mile by lane or date range" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/rating-reports      - Load rating summaries
GET  /api/ratings            - Individual load ratings`,
      },
    ],
  },
  {
    id: "document-management",
    icon: "DocumentIcon",
    title: "Document Management",
    subtitle: "Upload, store, and retrieve freight documents including BOL, POD, rate confirmations, and contracts.",
    badgeText: "Operations",
    badgeClass: "bg-violet-100 text-violet-700",
    features: [
      { title: "File Upload", desc: "Multer-based file upload — PDF, PNG, JPG, DOCX supported" },
      { title: "Document Types", desc: "BOL, POD, Rate Confirmation, W-9, Insurance, Contract" },
      { title: "Load Attachment", desc: "Link documents directly to specific loads" },
      { title: "Customer/Carrier Docs", desc: "Store compliance documents per counterparty" },
      { title: "Document Listing", desc: "Paginated list with type filter and date range" },
      { title: "Secure Access", desc: "Auth-gated document URLs — no public S3 exposure" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `POST /api/documents/upload    - Upload document (multipart/form-data)
GET  /api/documents           - List documents (filter by type, entity)
GET  /api/documents/:id       - Document metadata + download URL
DELETE /api/documents/:id     - Delete document`,
      },
    ],
  },
  {
    id: "truck-tracking",
    icon: "MapPinIcon",
    title: "Truck Tracking (GPS)",
    subtitle: "Real-time GPS location tracking for active loads using Socket.io and persistent location history.",
    badgeText: "Operations",
    badgeClass: "bg-violet-100 text-violet-700",
    features: [
      { title: "Real-time Location", desc: "Driver app pushes GPS coordinates via Socket.io WebSocket" },
      { title: "Location History", desc: "Full breadcrumb trail for each load" },
      { title: "ETA Estimation", desc: "Estimated arrival calculated from current position" },
      { title: "Geofence Alerts", desc: "Notifications when truck enters pickup or delivery zone" },
      { title: "Map View", desc: "CRM map view showing all active trucks on a single map" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/truck-tracking/live      - Active truck positions (all loads)
POST /api/truck-tracking/update    - Push GPS update (driver app)
GET  /api/truck-tracking/history/:loadId - Location history for a load`,
      },
    ],
  },
  {
    id: "location-management",
    icon: "MapPinIcon",
    title: "Location Management",
    subtitle: "Maintain an address book of pickup and delivery locations for quick load entry.",
    badgeText: "Operations",
    badgeClass: "bg-violet-100 text-violet-700",
    features: [
      { title: "Address Book", desc: "Save and reuse common pickup/delivery locations" },
      { title: "Google Maps", desc: "Address auto-complete with Google Maps Places API" },
      { title: "Location Notes", desc: "Attach access notes, contact info, and hours per location" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/locations           - Address book
POST /api/locations           - Save new location
PUT  /api/locations/:id       - Update location`,
      },
    ],
  },
  {
    id: "authentication",
    icon: "ShieldIcon",
    title: "Authentication & Security",
    subtitle: "JWT-based authentication with role permissions, encrypted payloads, and rate limiting.",
    badgeText: "Platform",
    badgeClass: "bg-slate-100 text-slate-700",
    features: [
      { title: "JWT Access Tokens", desc: "Short-lived access + refresh token pair via jsonwebtoken" },
      { title: "Role-Based Access", desc: "Admin, Manager, Dispatcher, Accountant — per-resource permissions" },
      { title: "Payload Encryption", desc: "Request/response bodies encrypted with crypto-js AES" },
      { title: "Rate Limiting", desc: "express-rate-limit on all endpoints to prevent abuse" },
      { title: "Helmet.js", desc: "Secure HTTP headers via Helmet middleware" },
      { title: "Password Hashing", desc: "bcrypt with configurable salt rounds" },
      { title: "Session Management", desc: "Express-session with Redis store for stateful sessions" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `POST /api/auth/login          - Login → returns { accessToken, refreshToken }
POST /api/auth/logout         - Invalidate tokens
POST /api/auth/refresh        - Refresh access token
POST /api/auth/register       - Company self-registration`,
      },
    ],
    notes: [
      {
        type: "info",
        label: "Authorization Header:",
        beforeCode: "All protected endpoints require ",
        code: "Authorization: Bearer <accessToken>",
      },
    ],
  },
  {
    id: "user-management",
    icon: "UsersIcon",
    title: "User Management",
    subtitle: "Create and manage user accounts with granular role and permission assignment per module.",
    badgeText: "Platform",
    badgeClass: "bg-slate-100 text-slate-700",
    features: [
      { title: "User Roles", desc: "Admin, Manager, Dispatcher, Accountant, Driver" },
      { title: "Module Permissions", desc: "Grant view/create/edit/delete per module (loads, invoices, etc.)" },
      { title: "Multi-company", desc: "One user can belong to multiple company accounts" },
      { title: "Password Reset", desc: "Email-based password reset flow via Nodemailer" },
      { title: "Invite by Email", desc: "Invite new team members with an email invite link" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/users               - List company users
POST /api/users               - Create / invite user
PUT  /api/users/:id           - Update user role & permissions
PUT  /api/users/:id/password  - Change password`,
      },
    ],
  },
  {
    id: "company-settings",
    icon: "CogIcon",
    title: "Company Settings",
    subtitle: "Configure company profile, logo, business details, and global defaults for invoicing and operations.",
    badgeText: "Platform",
    badgeClass: "bg-slate-100 text-slate-700",
    features: [
      { title: "Company Profile", desc: "Name, address, MC/DOT number, logo, phone, website" },
      { title: "Invoice Defaults", desc: "Default payment terms, notes footer, logo placement" },
      { title: "Tax Configuration", desc: "Default tax rates and auto-apply settings" },
      { title: "Email Settings", desc: "SMTP configuration for outbound emails via Nodemailer" },
      { title: "Subscription Plans", desc: "View and manage active subscription tier" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/company             - Company profile
PUT  /api/company             - Update company settings
GET  /api/plans               - Available subscription plans
GET  /api/taxes               - Tax rates configured`,
      },
    ],
  },
  {
    id: "custom-fields",
    icon: "CogIcon",
    title: "Custom Fields",
    subtitle: "Add dynamic custom fields to loads, customers, carriers, and more without code changes.",
    badgeText: "Platform",
    badgeClass: "bg-slate-100 text-slate-700",
    features: [
      { title: "Field Types", desc: "Text, number, date, dropdown, checkbox, multi-select" },
      { title: "Entity Binding", desc: "Attach custom fields to loads, customers, carriers, or drivers" },
      { title: "Required / Optional", desc: "Mark fields as required to enforce data entry" },
      { title: "Display Order", desc: "Drag-and-drop ordering in forms" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/custom-fields       - All custom field definitions
POST /api/custom-fields       - Create custom field
PUT  /api/custom-fields/:id   - Update field config
DELETE /api/custom-fields/:id - Delete field`,
      },
    ],
  },
  {
    id: "notifications",
    icon: "BellIcon",
    title: "Notifications",
    subtitle: "Real-time in-app notifications and automated email alerts for key events in the platform.",
    badgeText: "Platform",
    badgeClass: "bg-slate-100 text-slate-700",
    features: [
      { title: "In-App Alerts", desc: "Real-time push notifications via Socket.io" },
      { title: "Invoice Reminders", desc: "Automated email reminders for overdue invoices" },
      { title: "Load Status Alerts", desc: "Notify when load status changes (delivered, delayed)" },
      { title: "Payment Received", desc: "Notify on customer payment arrival" },
      { title: "Email Notifications", desc: "Nodemailer + EJS templates for beautiful emails" },
    ],
    codeBlocks: [
      {
        language: "http",
        code: `GET  /api/notifications       - Notification inbox (unread + read)
PUT  /api/notifications/:id/read  - Mark as read
DELETE /api/notifications/:id     - Dismiss notification`,
      },
    ],
  },
];

/* ─────────────────────── NAV DATA ─────────────────────── */

interface NavChild { id: string; label: string }
interface NavItem { id: string; label: string; children?: NavChild[] }
export const sidebarNav: NavItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "getting-started", label: "Getting Started" },
  {
    id: "core-features", label: "Core Features",
    children: [
      { id: "load-management", label: "Load Management" },
      { id: "customer-management", label: "Customer Management" },
      { id: "carrier-management", label: "Carrier Management" },
      { id: "driver-management", label: "Driver Management" },
    ],
  },
  {
    id: "financial", label: "Financial Management",
    children: [
      { id: "invoicing", label: "Invoicing & Billing" },
      { id: "payments", label: "Payment Management" },
      { id: "expenses", label: "Expense Tracking" },
      { id: "chart-of-accounts", label: "Chart of Accounts" },
      { id: "credit-debit-notes", label: "Credit & Debit Notes" },
    ],
  },
  {
    id: "reports", label: "Reports & Analytics",
    children: [
      { id: "dashboard", label: "Dashboard Overview" },
      { id: "financial-reports", label: "Financial Reports" },
      { id: "rating-reports", label: "Rating Reports" },
    ],
  },
  {
    id: "operations", label: "Operations",
    children: [
      { id: "document-management", label: "Document Management" },
      { id: "truck-tracking", label: "Truck Tracking (GPS)" },
      { id: "location-management", label: "Location Management" },
    ],
  },
  {
    id: "platform", label: "Platform",
    children: [
      { id: "authentication", label: "Authentication & Security" },
      { id: "user-management", label: "User Management" },
      { id: "company-settings", label: "Company Settings" },
      { id: "custom-fields", label: "Custom Fields" },
      { id: "notifications", label: "Notifications" },
    ],
  },
  { id: "api-reference", label: "API Reference" },
];

export const apiEndpoints = [
  { service: "Auth", base: "/api/auth", badge: "bg-blue-100 text-blue-700", desc: "JWT authentication & session management" },
  { service: "Loads", base: "/api/loads", badge: "bg-orange-100 text-orange-700", desc: "Freight load CRUD & status tracking" },
  { service: "Customers", base: "/api/customers", badge: "bg-green-100 text-green-700", desc: "Customer profiles & accounts receivable" },
  { service: "Carriers", base: "/api/carriers", badge: "bg-purple-100 text-purple-700", desc: "Carrier profiles & accounts payable" },
  { service: "Drivers", base: "/api/drivers", badge: "bg-indigo-100 text-indigo-700", desc: "Driver management & load assignments" },
  { service: "Accounts", base: "/api/accounts", badge: "bg-teal-100 text-teal-700", desc: "Invoice creation & billing management" },
  { service: "Payments", base: "/api/payments", badge: "bg-emerald-100 text-emerald-700", desc: "Payment recording & reconciliation" },
  { service: "Expenses", base: "/api/expenses", badge: "bg-rose-100 text-rose-700", desc: "Expense categories & tracking" },
  { service: "Reports", base: "/api/reports", badge: "bg-amber-100 text-amber-700", desc: "P&L, AR/AP aging, balance sheet" },
  { service: "Dashboard", base: "/api/dashboard", badge: "bg-cyan-100 text-cyan-700", desc: "KPIs, chart data & load stats" },
  { service: "Documents", base: "/api/documents", badge: "bg-violet-100 text-violet-700", desc: "File upload & document storage" },
  // { service: "Truck Tracking", base: "/api/truck-tracking",    badge: "bg-lime-100 text-lime-700",     desc: "Real-time GPS & location history" },
  { service: "Users", base: "/api/users", badge: "bg-slate-100 text-slate-700", desc: "User accounts & role permissions" },
  { service: "Company", base: "/api/company", badge: "bg-zinc-100 text-zinc-700", desc: "Company profile & business settings" },
  { service: "Journal Entries", base: "/api/journal-entries", badge: "bg-sky-100 text-sky-700", desc: "Double-entry bookkeeping records" },
  { service: "Chart of Accounts", base: "/api/chart-accounts", badge: "bg-fuchsia-100 text-fuchsia-700", desc: "Account hierarchy management" },
  { service: "Custom Fields", base: "/api/custom-fields", badge: "bg-pink-100 text-pink-700", desc: "Dynamic form field configuration" },
  { service: "Taxes", base: "/api/taxes", badge: "bg-red-100 text-red-700", desc: "Tax rates & calculation rules" },
  { service: "Credit/Debit Notes", base: "/api/credit-debit-notes", badge: "bg-orange-100 text-orange-700", desc: "Credit & debit note lifecycle" },
  { service: "Notifications", base: "/api/notifications", badge: "bg-yellow-100 text-yellow-700", desc: "In-app & email notification system" },
  { service: "VIN Lookup", base: "/api/vin", badge: "bg-blue-100 text-blue-700", desc: "Vehicle identification number decode" },
  { service: "SAFER Lookup", base: "/api/safer", badge: "bg-green-100 text-green-700", desc: "FMCSA SAFER carrier safety data" },
  { service: "Products", base: "/api/products", badge: "bg-indigo-100 text-indigo-700", desc: "Product & service catalog" },
  { service: "Plans", base: "/api/plans", badge: "bg-teal-100 text-teal-700", desc: "Subscription plan management" },
  { service: "Payment Terms", base: "/api/payment-terms", badge: "bg-emerald-100 text-emerald-700", desc: "Net-30, Net-60 & custom terms" },
  { service: "Rating Reports", base: "/api/rating-reports", badge: "bg-amber-100 text-amber-700", desc: "Load & carrier performance ratings" },
  { service: "Locations", base: "/api/locations", badge: "bg-cyan-100 text-cyan-700", desc: "Pickup/delivery address book" },
];