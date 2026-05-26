import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ApiIcon, ArrowRightIcon, Badge, BellIcon, ChartIcon, CheckIcon, CodeBlock, CogIcon, DocumentIcon, DollarIcon, MapPinIcon, MenuIcon, SectionTitle, ShieldIcon, TruckIcon, UsersIcon } from "@/components/ui";
import { apiEndpoints, sidebarNav } from "@/data/docs";
import Link from "next/link";
 
 

 
function FeatureGrid({ features }: { features: { title: string; desc: string; icon?: React.ReactNode }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
      {features.map((f) => (
        <div key={f.title} className="flex items-start gap-3 p-4 rounded-lg border border-slate-200 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
          <span className="mt-0.5 flex-shrink-0 text-blue-500">{f.icon || <CheckIcon />}</span>
          <div>
            <p className="font-semibold text-slate-800 text-sm">{f.title}</p>
            <p className="text-slate-500 text-xs mt-0.5">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
 
function StatusBadges({ statuses }: { statuses: { label: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {statuses.map((s) => (
        <span key={s.label} className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium border ${s.color}`}>
          {s.label}
        </span>
      ))}
    </div>
  );
}
 
/* ─────────────────────── SIDEBAR ─────────────────────── */
 
function Sidebar({
  isOpen, activeId, onLinkClick,
}: {
  isOpen: boolean; activeId: string; onLinkClick: (id: string) => void;
}) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-20 bg-black/40 md:hidden" onClick={() => onLinkClick(activeId)} />
      )}
      <aside
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-slate-50 border-r border-slate-200 overflow-y-auto z-30 transition-transform duration-200
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="p-4 pb-12">
          {sidebarNav.map((item) => (
            <div key={item.id} className="mb-1">
              {item.children ? (
                <>
                  <p className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider mt-3 mb-1">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <a
                      key={child.id}
                      href={`#${child.id}`}
                      onClick={(e) => { e.preventDefault(); onLinkClick(child.id); }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${
                        activeId === child.id
                          ? "bg-blue-600 text-white font-medium"
                          : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                      }`}
                    >
                      <ArrowRightIcon />
                      {child.label}
                    </a>
                  ))}
                </>
              ) : (
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); onLinkClick(item.id); }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeId === item.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
 
/* ─────────────────────── NAVBAR ─────────────────────── */
 
function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-white border-b border-slate-200 flex items-center px-4 sm:px-6 gap-4">
      <button
        onClick={onMenuToggle}
        className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-slate-100 text-slate-600"
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </button>
      <Link className="flex items-center gap-2" href={"/"}>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
          <TruckIcon />
        </div>
        <span className="font-bold text-slate-900 text-lg tracking-tight">FreightBooks</span>
        <Badge className="bg-blue-100 text-blue-700 ml-1 hidden sm:inline-flex">Docs v1.0</Badge>
      </Link>
      <div className="flex-1" />
      <div className="hidden sm:flex items-center gap-1 text-sm text-slate-500 bg-slate-100 rounded-md px-3 py-1.5 min-w-52">
        <svg className="w-4 h-4 mr-1 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35"/>
        </svg>
        <span>Search docs…</span>
        <span className="ml-auto text-xs bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-400">⌘K</span>
      </div>
      <a
        href="#getting-started"
        className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </header>
  );
}
 


export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeId, setActiveId] = useState("introduction");
 
  const scrollTo = (id: string) => {
    setSidebarOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
 
  useEffect(() => {
    const allIds: string[] = [];
    sidebarNav.forEach((item) => {
      if (item.children) item.children.forEach((c) => allIds.push(c.id));
      else allIds.push(item.id);
    });
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    allIds.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
 
  return (
    <>
      <Head>
        <title>FreightBooks — Transport & Accounting Platform Documentation</title>
        <meta name="description" content="Complete documentation for FreightBooks: a full-stack freight management and accounting system covering loads, invoicing, customers, carriers, drivers, reports, and more." />
      </Head>
      <div className="min-h-screen bg-white font-sans">
        <Navbar onMenuToggle={() => setSidebarOpen((v) => !v)} />
        <Sidebar isOpen={sidebarOpen} activeId={activeId} onLinkClick={scrollTo} />
 
        {/* ── Main Content ── */}
        <main className="md:pl-72 pt-16">
          <div className="max-w-4xl mx-auto px-6 py-10 space-y-16">
 
            {/* ══ HERO ══ */}
            <div id="introduction" className="scroll-mt-20">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-100 text-orange-700">Transport & Accounting</Badge>
                <Badge className="bg-green-100 text-green-700">API + CRM</Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
                FreightBooks<br />
                <span className="text-blue-600">Platform Docs</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
                FreightBooks is a complete <strong>Transport Service Accounting System</strong> that combines
                freight operations management with full double-entry accounting, real-time tracking,
                and intelligent reporting — built for freight brokers, trucking companies, and logistics providers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <TruckIcon />, title: "Freight Operations", desc: "Load management, dispatch, rate confirmations, BOL/POD" },
                  { icon: <DollarIcon />, title: "Full Accounting", desc: "AR, AP, P&L, balance sheet, journal entries" },
                  { icon: <ChartIcon />, title: "Analytics", desc: "Real-time dashboard, aging reports, profit analysis" },
                ].map((card) => (
                  <div key={card.title} className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white mb-3">
                      {card.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-500">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-slate-900 p-5 text-sm">
                <p className="text-slate-400 mb-2 font-mono text-xs">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js + Express", "TypeScript", "MongoDB + Mongoose", "React + Vite", "Redux Toolkit", "Socket.io (Real-time)", "BullMQ (Queues)", "Redis", "JWT Auth", "Puppeteer (PDF)", "Swagger UI"].map((t) => (
                    <span key={t} className="bg-slate-700 text-slate-200 rounded-md px-2.5 py-1 text-xs font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </div>
 
            {/* ══ GETTING STARTED ══ */}
            <section>
              <SectionTitle id="getting-started" icon={<CogIcon />} title="Getting Started" subtitle="Prerequisites, environment setup, and running the FreightBooks API & CRM locally." badgeText="Setup" badgeClass="bg-green-100 text-green-700" />
              <h3 className="font-semibold text-slate-800 mb-2">Prerequisites</h3>
              <FeatureGrid features={[
                { title: "Node.js ≥ 18", desc: "Required for both API and CRM" },
                { title: "MongoDB", desc: "Primary database — local or Atlas" },
                { title: "Redis", desc: "Session cache & BullMQ job queues" },
                { title: "RabbitMQ (optional)", desc: "AMQP-based message broker for events" },
              ]} />
              <h3 className="font-semibold text-slate-800 mb-2 mt-6">API Server</h3>
              <CodeBlock language="bash" code={`# 1. Install dependencies
npm install
 
# 2. Copy environment file and configure
cp .env.example .env
 
# 3. Start development server
npm run dev
 
# API is available at http://localhost:5000`} />
              <h3 className="font-semibold text-slate-800 mb-2 mt-4">CRM (Frontend)</h3>
              <CodeBlock language="bash" code={`# In the freightbooks-crm directory
npm install
npm run dev
 
# CRM runs at http://localhost:5173`} />
              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <strong>Note:</strong> All API responses are encrypted using <code className="bg-amber-100 rounded px-1">crypto-js</code>. The CRM automatically handles encryption/decryption via axios interceptors.
              </div>
            </section>
 
            {/* ══ LOAD MANAGEMENT ══ */}
            <section>
              <SectionTitle id="load-management" icon={<TruckIcon />} title="Load Management" subtitle="Create, assign, and track freight loads from pickup through delivery, invoicing, and payment collection." badgeText="Core" badgeClass="bg-orange-100 text-orange-700" />
              <h3 className="font-semibold text-slate-800 mb-3">Load Lifecycle</h3>
              <StatusBadges statuses={[
                { label: "Draft", color: "border-slate-300 text-slate-600 bg-slate-50" },
                { label: "Pending", color: "border-yellow-300 text-yellow-700 bg-yellow-50" },
                { label: "Active", color: "border-blue-300 text-blue-700 bg-blue-50" },
                { label: "In Transit", color: "border-indigo-300 text-indigo-700 bg-indigo-50" },
                { label: "Delivered", color: "border-green-300 text-green-700 bg-green-50" },
                { label: "Invoiced", color: "border-purple-300 text-purple-700 bg-purple-50" },
                { label: "Paid", color: "border-emerald-300 text-emerald-700 bg-emerald-50" },
                { label: "Cancelled", color: "border-red-300 text-red-700 bg-red-50" },
              ]} />
              <FeatureGrid features={[
                { title: "Multi-stop Loads", desc: "Configure pickup and delivery stops with dates, locations & contacts" },
                { title: "Rate Confirmations", desc: "Generate and email PDF rate confirmation to carriers" },
                { title: "BOL / POD", desc: "Attach Bill of Lading and Proof of Delivery documents" },
                { title: "Driver Assignment", desc: "Assign drivers and carriers directly from the load form" },
                { title: "Load Cloning", desc: "Duplicate existing loads to speed up dispatching" },
                { title: "Column Customization", desc: "Toggle visible columns on the load board table" },
                { title: "Bulk Actions", desc: "Update status or export multiple loads at once" },
                { title: "Real-time Status", desc: "Live status updates via Socket.io push notifications" },
              ]} />
              <CodeBlock language="http" code={`GET    /api/loads              - List loads (paginated, filtered)
POST   /api/loads              - Create new load
GET    /api/loads/:id          - Get load details
PUT    /api/loads/:id          - Update load
DELETE /api/loads/:id          - Delete load
POST   /api/loads/:id/clone    - Clone a load
GET    /api/loads/:id/rate-pdf - Download rate confirmation PDF`} />
            </section>
 
            {/* ══ CUSTOMER MANAGEMENT ══ */}
            <section>
              <SectionTitle id="customer-management" icon={<UsersIcon />} title="Customer Management" subtitle="Manage customer (shipper) profiles, billing contacts, payment terms, and accounts receivable." badgeText="Core" badgeClass="bg-orange-100 text-orange-700" />
              <FeatureGrid features={[
                { title: "Customer Profiles", desc: "Company name, address, billing info, credit limits" },
                { title: "Contact Persons", desc: "Multiple contacts per customer with roles and direct lines" },
                { title: "Payment Terms", desc: "Assign Net-30, Net-60, COD, or custom terms per customer" },
                { title: "AR Tracking", desc: "Outstanding invoices and balance summary per customer" },
                { title: "Customer Portal", desc: "Send invoice links and payment reminders via email" },
                { title: "Load History", desc: "View all loads and invoices tied to a customer" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/customers           - List all customers
POST /api/customers           - Create customer
GET  /api/customers/:id       - Customer details + AR summary
PUT  /api/customers/:id       - Update customer
GET  /api/contact-persons     - List contacts for a customer`} />
            </section>
 
            {/* ══ CARRIER MANAGEMENT ══ */}
            <section>
              <SectionTitle id="carrier-management" icon={<TruckIcon />} title="Carrier Management" subtitle="Manage carrier (trucking company) profiles, compliance, accounts payable, and contact persons." badgeText="Core" badgeClass="bg-orange-100 text-orange-700" />
              <FeatureGrid features={[
                { title: "Carrier Profiles", desc: "MC number, DOT, address, insurance details" },
                { title: "SAFER Integration", desc: "Look up FMCSA SAFER carrier safety data by DOT number" },
                { title: "AP Tracking", desc: "Outstanding bills and payment history per carrier" },
                { title: "Contact Persons", desc: "Dispatch contacts and accounting contacts per carrier" },
                { title: "Carrier Rating", desc: "Track on-time performance and reliability scores" },
                { title: "Document Storage", desc: "Store W-9, insurance certificates, carrier agreements" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/carriers            - List carriers
POST /api/carriers            - Create carrier
GET  /api/carriers/:id        - Carrier details + AP summary
GET  /api/safer/lookup/:dot   - FMCSA SAFER lookup by DOT
GET  /api/carrier-contact-persons - Carrier contacts`} />
            </section>
 
            {/* ══ DRIVER MANAGEMENT ══ */}
            <section>
              <SectionTitle id="driver-management" icon={<UsersIcon />} title="Driver Management" subtitle="Maintain driver records, license info, load assignments, and vehicle details." />
              <FeatureGrid features={[
                { title: "Driver Profiles", desc: "License number, class, expiry, contact info" },
                { title: "Load Assignment", desc: "Assign drivers to specific loads with truck details" },
                { title: "VIN Lookup", desc: "Decode vehicle details by VIN number automatically" },
                { title: "Truck Information", desc: "Store truck make, model, year, plate, and license" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/drivers             - List drivers
POST /api/drivers             - Add driver
GET  /api/drivers/:id         - Driver profile
GET  /api/vin/lookup/:vin     - VIN decode`} />
            </section>
 
            {/* ══ INVOICING ══ */}
            <section>
              <SectionTitle id="invoicing" icon={<DocumentIcon />} title="Invoicing & Billing" subtitle="Create professional invoices from loads, manage line items, taxes, and send automated email reminders." badgeText="Financial" badgeClass="bg-teal-100 text-teal-700" />
              <FeatureGrid features={[
                { title: "Load-to-Invoice", desc: "One-click invoice generation from a completed load" },
                { title: "Line Items", desc: "Freight charge, fuel surcharge, accessorial fees, custom lines" },
                { title: "Tax Calculation", desc: "Apply configurable tax rates per line item or total" },
                { title: "PDF Generation", desc: "Puppeteer-rendered, branded PDF invoices" },
                { title: "Email Reminders", desc: "Automated reminder emails on payment due dates" },
                { title: "Invoice Status", desc: "Draft → Sent → Partial → Paid → Void lifecycle" },
                { title: "Credit Notes", desc: "Offset invoices with credit or debit note adjustments" },
                { title: "Multi-currency", desc: "Support for multiple currencies per invoice" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/accounts            - List invoices / bills
POST /api/accounts            - Create invoice or vendor bill
GET  /api/accounts/:id        - Invoice details
PUT  /api/accounts/:id        - Update invoice
GET  /api/accounts/:id/pdf    - Download invoice PDF
POST /api/accounts/:id/email  - Send invoice email`} />
            </section>
 
            {/* ══ PAYMENTS ══ */}
            <section>
              <SectionTitle id="payments" icon={<DollarIcon />} title="Payment Management" subtitle="Record customer payments and carrier bill payments, with full AR/AP reconciliation." badgeText="Financial" badgeClass="bg-teal-100 text-teal-700" />
              <FeatureGrid features={[
                { title: "Payment Recording", desc: "Log ACH, check, wire, or credit card payments" },
                { title: "Partial Payments", desc: "Apply partial payments and track outstanding balances" },
                { title: "Payment Terms", desc: "Net-15/30/60, COD, immediate — per customer or carrier" },
                { title: "AR Aging", desc: "Current, 30, 60, 90+ day aging buckets for receivables" },
                { title: "AP Aging", desc: "Current, 30, 60, 90+ day aging buckets for payables" },
                { title: "Payment History", desc: "Full audit trail per invoice with timestamps" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/payments            - Payment history
POST /api/payments            - Record new payment
GET  /api/payment-terms       - List payment terms
POST /api/payment-terms       - Create custom terms`} />
            </section>
 
            {/* ══ EXPENSES ══ */}
            <section>
              <SectionTitle id="expenses" icon={<DollarIcon />} title="Expense Tracking" subtitle="Track operational and overhead expenses with category management and vendor bill support." badgeText="Financial" badgeClass="bg-teal-100 text-teal-700" />
              <FeatureGrid features={[
                { title: "Expense Categories", desc: "Fuel, maintenance, insurance, office, and custom categories" },
                { title: "Vendor Bills", desc: "Record bills from vendors and track AP" },
                { title: "Expense Fees", desc: "Pre-defined fee types for quick expense entry" },
                { title: "Receipt Attachments", desc: "Attach scanned receipts or invoice documents" },
                { title: "Expense Reports", desc: "Filter by category, date, or vendor for reporting" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/expenses            - List expenses
POST /api/expenses            - Create expense
GET  /api/expense-fees        - Expense fee categories`} />
            </section>
 
            {/* ══ CHART OF ACCOUNTS ══ */}
            <section>
              <SectionTitle id="chart-of-accounts" icon={<ChartIcon />} title="Chart of Accounts" subtitle="Maintain a full double-entry accounting chart of accounts with journal entries and general ledger." badgeText="Financial" badgeClass="bg-teal-100 text-teal-700" />
              <FeatureGrid features={[
                { title: "Account Hierarchy", desc: "Assets, Liabilities, Equity, Revenue, Expenses" },
                { title: "Journal Entries", desc: "Manual double-entry journal records with debit/credit" },
                { title: "Auto-posting", desc: "Invoices and payments automatically post to the ledger" },
                { title: "Account Balances", desc: "Real-time debit/credit balance per account" },
                { title: "Bank Reconciliation", desc: "Reconcile bank statements against ledger entries" },
                { title: "Transactions Ledger", desc: "Full transaction history filterable by account" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/chart-accounts      - Account list
POST /api/chart-accounts      - Create account
GET  /api/journal-entries     - Journal entries
POST /api/journal-entries     - Create manual journal
GET  /api/transactions        - Transactions ledger`} />
            </section>
 
            {/* ══ CREDIT/DEBIT NOTES ══ */}
            <section>
              <SectionTitle id="credit-debit-notes" icon={<DocumentIcon />} title="Credit & Debit Notes" subtitle="Issue credit notes to reduce invoice amounts and debit notes to charge customers for adjustments." badgeText="Financial" badgeClass="bg-teal-100 text-teal-700" />
              <FeatureGrid features={[
                { title: "Credit Notes", desc: "Reduce a customer's outstanding invoice balance" },
                { title: "Debit Notes", desc: "Increase a customer's balance for adjustments" },
                { title: "Auto-application", desc: "Automatically apply credit notes to open invoices" },
                { title: "PDF & Email", desc: "Generate and email PDF credit/debit note documents" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/credit-debit-notes  - List notes
POST /api/credit-debit-notes  - Create credit or debit note
GET  /api/credit-debit-notes/:id  - Note details`} />
            </section>
 
            {/* ══ DASHBOARD ══ */}
            <section>
              <SectionTitle id="dashboard" icon={<ChartIcon />} title="Dashboard Overview" subtitle="Real-time visual dashboard showing load statistics, financial KPIs, and trend charts." badgeText="Analytics" badgeClass="bg-cyan-100 text-cyan-700" />
              <FeatureGrid features={[
                { title: "Load Status Cards", desc: "Count of active, in-transit, delivered, and invoiced loads" },
                { title: "Profit & Loss Chart", desc: "Monthly revenue vs expense trend line chart" },
                { title: "Accounts Receivable", desc: "Open AR balance by aging bucket — bar chart" },
                { title: "Accounts Payable", desc: "Open AP balance by carrier — bar chart" },
                { title: "Sales Chart", desc: "Revenue trend by week / month / quarter" },
                { title: "Expenses Chart", desc: "Expense breakdown by category — pie/donut chart" },
                { title: "Invoice Summary", desc: "Outstanding vs. collected invoice totals" },
                { title: "Quick Actions", desc: "Shortcuts to create load, invoice, or customer" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/dashboard/stats     - KPI counts (loads, invoices, AR, AP)
GET  /api/dashboard/charts    - Chart datasets for P&L, AR, AP, Sales`} />
            </section>
 
            {/* ══ FINANCIAL REPORTS ══ */}
            <section>
              <SectionTitle id="financial-reports" icon={<ChartIcon />} title="Financial Reports" subtitle="Generate standard financial reports including Profit & Loss, Balance Sheet, AR/AP aging, and tax summaries." badgeText="Analytics" badgeClass="bg-cyan-100 text-cyan-700" />
              <FeatureGrid features={[
                { title: "Profit & Loss", desc: "Revenue, COGS, gross profit, operating expenses, net income" },
                { title: "Balance Sheet", desc: "Assets, liabilities, and equity snapshot at any date" },
                { title: "AR Aging Report", desc: "Outstanding receivables by age bucket per customer" },
                { title: "AP Aging Report", desc: "Outstanding payables by age bucket per carrier/vendor" },
                { title: "Cash Flow Statement", desc: "Operating, investing, financing cash flows" },
                { title: "Tax Report", desc: "Tax collected and tax paid summary for filing" },
                { title: "Customer Revenue", desc: "Revenue breakdown per customer for a date range" },
                { title: "Carrier Cost", desc: "Total carrier cost breakdown for profitability" },
                { title: "CSV / PDF Export", desc: "Download any report as CSV or formatted PDF" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/reports/profit-loss          - P&L statement
GET  /api/reports/balance-sheet         - Balance sheet
GET  /api/reports/ar-aging              - AR aging buckets
GET  /api/reports/ap-aging              - AP aging buckets
GET  /api/reports/cash-flow             - Cash flow statement
GET  /api/reports/tax-summary           - Tax report`} />
            </section>
 
            {/* ══ RATING REPORTS ══ */}
            <section>
              <SectionTitle id="rating-reports" icon={<ChartIcon />} title="Rating Reports" subtitle="Analyze load pricing, lane profitability, and carrier performance ratings." badgeText="Analytics" badgeClass="bg-cyan-100 text-cyan-700" />
              <FeatureGrid features={[
                { title: "Lane Analysis", desc: "Profitability per origin-destination lane" },
                { title: "Carrier Performance", desc: "On-time delivery rate, damage claims, rejections" },
                { title: "Rate Per Mile", desc: "Average rate per mile by lane or date range" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/rating-reports      - Load rating summaries
GET  /api/ratings            - Individual load ratings`} />
            </section>
 
            {/* ══ DOCUMENT MANAGEMENT ══ */}
            <section>
              <SectionTitle id="document-management" icon={<DocumentIcon />} title="Document Management" subtitle="Upload, store, and retrieve freight documents including BOL, POD, rate confirmations, and contracts." badgeText="Operations" badgeClass="bg-violet-100 text-violet-700" />
              <FeatureGrid features={[
                { title: "File Upload", desc: "Multer-based file upload — PDF, PNG, JPG, DOCX supported" },
                { title: "Document Types", desc: "BOL, POD, Rate Confirmation, W-9, Insurance, Contract" },
                { title: "Load Attachment", desc: "Link documents directly to specific loads" },
                { title: "Customer/Carrier Docs", desc: "Store compliance documents per counterparty" },
                { title: "Document Listing", desc: "Paginated list with type filter and date range" },
                { title: "Secure Access", desc: "Auth-gated document URLs — no public S3 exposure" },
              ]} />
              <CodeBlock language="http" code={`POST /api/documents/upload    - Upload document (multipart/form-data)
GET  /api/documents           - List documents (filter by type, entity)
GET  /api/documents/:id       - Document metadata + download URL
DELETE /api/documents/:id     - Delete document`} />
            </section>
 
            {/* ══ TRUCK TRACKING ══ */}
            <section>
              <SectionTitle id="truck-tracking" icon={<MapPinIcon />} title="Truck Tracking (GPS)" subtitle="Real-time GPS location tracking for active loads using Socket.io and persistent location history." badgeText="Operations" badgeClass="bg-violet-100 text-violet-700" />
              <FeatureGrid features={[
                { title: "Real-time Location", desc: "Driver app pushes GPS coordinates via Socket.io WebSocket" },
                { title: "Location History", desc: "Full breadcrumb trail for each load" },
                { title: "ETA Estimation", desc: "Estimated arrival calculated from current position" },
                { title: "Geofence Alerts", desc: "Notifications when truck enters pickup or delivery zone" },
                { title: "Map View", desc: "CRM map view showing all active trucks on a single map" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/truck-tracking/live      - Active truck positions (all loads)
POST /api/truck-tracking/update    - Push GPS update (driver app)
GET  /api/truck-tracking/history/:loadId - Location history for a load`} />
            </section>
 
            {/* ══ LOCATION MANAGEMENT ══ */}
            <section>
              <SectionTitle id="location-management" icon={<MapPinIcon />} title="Location Management" subtitle="Maintain an address book of pickup and delivery locations for quick load entry." badgeText="Operations" badgeClass="bg-violet-100 text-violet-700" />
              <FeatureGrid features={[
                { title: "Address Book", desc: "Save and reuse common pickup/delivery locations" },
                { title: "Google Maps", desc: "Address auto-complete with Google Maps Places API" },
                { title: "Location Notes", desc: "Attach access notes, contact info, and hours per location" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/locations           - Address book
POST /api/locations           - Save new location
PUT  /api/locations/:id       - Update location`} />
            </section>
 
            {/* ══ AUTHENTICATION ══ */}
            <section>
              <SectionTitle id="authentication" icon={<ShieldIcon />} title="Authentication & Security" subtitle="JWT-based authentication with role permissions, encrypted payloads, and rate limiting." badgeText="Platform" badgeClass="bg-slate-100 text-slate-700" />
              <FeatureGrid features={[
                { title: "JWT Access Tokens", desc: "Short-lived access + refresh token pair via jsonwebtoken" },
                { title: "Role-Based Access", desc: "Admin, Manager, Dispatcher, Accountant — per-resource permissions" },
                { title: "Payload Encryption", desc: "Request/response bodies encrypted with crypto-js AES" },
                { title: "Rate Limiting", desc: "express-rate-limit on all endpoints to prevent abuse" },
                { title: "Helmet.js", desc: "Secure HTTP headers via Helmet middleware" },
                { title: "Password Hashing", desc: "bcrypt with configurable salt rounds" },
                { title: "Session Management", desc: "Express-session with Redis store for stateful sessions" },
              ]} />
              <CodeBlock language="http" code={`POST /api/auth/login          - Login → returns { accessToken, refreshToken }
POST /api/auth/logout         - Invalidate tokens
POST /api/auth/refresh        - Refresh access token
POST /api/auth/register       - Company self-registration`} />
              <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
                <strong>Authorization Header:</strong> All protected endpoints require <code className="bg-blue-100 rounded px-1">Authorization: Bearer &lt;accessToken&gt;</code>
              </div>
            </section>
 
            {/* ══ USER MANAGEMENT ══ */}
            <section>
              <SectionTitle id="user-management" icon={<UsersIcon />} title="User Management" subtitle="Create and manage user accounts with granular role and permission assignment per module." badgeText="Platform" badgeClass="bg-slate-100 text-slate-700" />
              <FeatureGrid features={[
                { title: "User Roles", desc: "Admin, Manager, Dispatcher, Accountant, Driver" },
                { title: "Module Permissions", desc: "Grant view/create/edit/delete per module (loads, invoices, etc.)" },
                { title: "Multi-company", desc: "One user can belong to multiple company accounts" },
                { title: "Password Reset", desc: "Email-based password reset flow via Nodemailer" },
                { title: "Invite by Email", desc: "Invite new team members with an email invite link" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/users               - List company users
POST /api/users               - Create / invite user
PUT  /api/users/:id           - Update user role & permissions
PUT  /api/users/:id/password  - Change password`} />
            </section>
 
            {/* ══ COMPANY SETTINGS ══ */}
            <section>
              <SectionTitle id="company-settings" icon={<CogIcon />} title="Company Settings" subtitle="Configure company profile, logo, business details, and global defaults for invoicing and operations." badgeText="Platform" badgeClass="bg-slate-100 text-slate-700" />
              <FeatureGrid features={[
                { title: "Company Profile", desc: "Name, address, MC/DOT number, logo, phone, website" },
                { title: "Invoice Defaults", desc: "Default payment terms, notes footer, logo placement" },
                { title: "Tax Configuration", desc: "Default tax rates and auto-apply settings" },
                { title: "Email Settings", desc: "SMTP configuration for outbound emails via Nodemailer" },
                { title: "Subscription Plans", desc: "View and manage active subscription tier" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/company             - Company profile
PUT  /api/company             - Update company settings
GET  /api/plans               - Available subscription plans
GET  /api/taxes               - Tax rates configured`} />
            </section>
 
            {/* ══ CUSTOM FIELDS ══ */}
            <section>
              <SectionTitle id="custom-fields" icon={<CogIcon />} title="Custom Fields" subtitle="Add dynamic custom fields to loads, customers, carriers, and more without code changes." badgeText="Platform" badgeClass="bg-slate-100 text-slate-700" />
              <FeatureGrid features={[
                { title: "Field Types", desc: "Text, number, date, dropdown, checkbox, multi-select" },
                { title: "Entity Binding", desc: "Attach custom fields to loads, customers, carriers, or drivers" },
                { title: "Required / Optional", desc: "Mark fields as required to enforce data entry" },
                { title: "Display Order", desc: "Drag-and-drop ordering in forms" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/custom-fields       - All custom field definitions
POST /api/custom-fields       - Create custom field
PUT  /api/custom-fields/:id   - Update field config
DELETE /api/custom-fields/:id - Delete field`} />
            </section>
 
            {/* ══ NOTIFICATIONS ══ */}
            <section>
              <SectionTitle id="notifications" icon={<BellIcon />} title="Notifications" subtitle="Real-time in-app notifications and automated email alerts for key events in the platform." badgeText="Platform" badgeClass="bg-slate-100 text-slate-700" />
              <FeatureGrid features={[
                { title: "In-App Alerts", desc: "Real-time push notifications via Socket.io" },
                { title: "Invoice Reminders", desc: "Automated email reminders for overdue invoices" },
                { title: "Load Status Alerts", desc: "Notify when load status changes (delivered, delayed)" },
                { title: "Payment Received", desc: "Notify on customer payment arrival" },
                { title: "Email Notifications", desc: "Nodemailer + EJS templates for beautiful emails" },
              ]} />
              <CodeBlock language="http" code={`GET  /api/notifications       - Notification inbox (unread + read)
PUT  /api/notifications/:id/read  - Mark as read
DELETE /api/notifications/:id     - Dismiss notification`} />
            </section>
 
            {/* ══ API REFERENCE ══ */}
            <section>
              <SectionTitle id="api-reference" icon={<ApiIcon />} title="API Reference" subtitle="Complete list of all 28 microservice modules available in the FreightBooks REST API." badgeText="28 Services" badgeClass="bg-blue-100 text-blue-700" />
              <p className="text-sm text-slate-500 mb-4">
                Base URL: <code className="bg-slate-100 rounded px-2 py-0.5 text-slate-700 font-mono">https://api.freightbooks.com/api</code>
                &nbsp;·&nbsp; All endpoints require JWT auth except <code className="bg-slate-100 rounded px-1 font-mono">/auth/login</code>
                &nbsp;·&nbsp; Responses are AES-encrypted.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apiEndpoints.map((ep) => (
                  <div key={ep.service} className="flex items-start gap-3 p-3.5 rounded-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors">
                    <div className="flex-shrink-0 mt-0.5">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold font-mono ${ep.badge}`}>
                        API
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{ep.service}</p>
                      <code className="text-xs text-slate-400 font-mono">{ep.base}</code>
                      <p className="text-xs text-slate-500 mt-0.5">{ep.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
                <strong>Swagger UI</strong> is available at <code className="bg-blue-100 rounded px-1">/api/docs</code> when running in development mode.
                Use it to explore and test all endpoints interactively.
              </div>
            </section>
 
            {/* ══ FOOTER ══ */}
            <footer className="border-t border-slate-200 pt-8 pb-4 text-center text-sm text-slate-400">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-md bg-blue-600 text-white">
                  <TruckIcon />
                </div>
                <span className="font-semibold text-slate-700 text-base">FreightBooks</span>
              </div>
              <p className="text-slate-500">Transport Service Accounting System · Built for freight brokers &amp; trucking companies</p>
              <p className="mt-1">API · CRM · Tracking · Accounting · Reports</p>
            </footer>
 
          </div>
        </main>
      </div>
    </>
  );
}
