 
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
  { service: "Truck Tracking", base: "/api/truck-tracking", badge: "bg-lime-100 text-lime-700", desc: "Real-time GPS & location history" },
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