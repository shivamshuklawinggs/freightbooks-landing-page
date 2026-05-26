import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  ApiIcon, ArrowRightIcon, Badge, BellIcon, ChartIcon, CheckIcon,
  CodeBlock, CogIcon, DocumentIcon, DollarIcon, MapPinIcon, MenuIcon,
  SectionTitle, ShieldIcon, TruckIcon, UsersIcon,
} from "@/components/ui";
import { apiEndpoints, sidebarNav, docSections, heroData, SectionEntry, NoteEntry, IconName } from "@/data/docs";
import Link from "next/link";

/* ─────────────────────── ICON MAP ─────────────────────── */

const iconMap: Record<IconName, React.ReactNode> = {
  TruckIcon:    <TruckIcon />,
  DollarIcon:   <DollarIcon />,
  ChartIcon:    <ChartIcon />,
  UsersIcon:    <UsersIcon />,
  DocumentIcon: <DocumentIcon />,
  CogIcon:      <CogIcon />,
  ShieldIcon:   <ShieldIcon />,
  BellIcon:     <BellIcon />,
  MapPinIcon:   <MapPinIcon />,
  ApiIcon:      <ApiIcon />,
};

/* ─────────────────────── SHARED SUB-COMPONENTS ─────────────────────── */

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

function SectionNote({ note }: { note: NoteEntry }) {
  const isWarning = note.type === "warning";
  const containerCls = isWarning
    ? "border-amber-200 bg-amber-50 text-amber-800"
    : "border-blue-200 bg-blue-50 text-blue-800";
  const codeCls = isWarning ? "bg-amber-100" : "bg-blue-100";
  return (
    <div className={`mt-4 rounded-lg border ${containerCls} p-4 text-sm`}>
      <strong>{note.label}</strong>{" "}
      {note.beforeCode}
      {note.code && <code className={`${codeCls} rounded px-1`}>{note.code}</code>}
      {note.afterCode}
    </div>
  );
}

/* ─────────────────────── GENERIC SECTION RENDERER ─────────────────────── */

function DocSection({ section }: { section: SectionEntry }) {
  return (
    <section>
      <SectionTitle
        id={section.id}
        icon={iconMap[section.icon]}
        title={section.title}
        subtitle={section.subtitle}
        badgeText={section.badgeText}
        badgeClass={section.badgeClass}
      />
      {section.statusesHeading && (
        <h3 className="font-semibold text-slate-800 mb-3">{section.statusesHeading}</h3>
      )}
      {section.statuses && <StatusBadges statuses={section.statuses} />}
      {section.featuresHeading && (
        <h3 className="font-semibold text-slate-800 mb-2">{section.featuresHeading}</h3>
      )}
      <FeatureGrid features={section.features} />
      {section.codeBlocks?.map((cb, i) => (
        <React.Fragment key={i}>
          {cb.heading && (
            <h3 className={`font-semibold text-slate-800 mb-2 ${i === 0 ? "mt-6" : "mt-4"}`}>
              {cb.heading}
            </h3>
          )}
          <CodeBlock language={cb.language} code={cb.code} />
        </React.Fragment>
      ))}
      {section.notes?.map((note, i) => (
        <SectionNote key={i} note={note} />
      ))}
    </section>
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

/* ─────────────────────── PAGE ─────────────────────── */

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
                {heroData.cards.map((card) => (
                  <div key={card.title} className="p-5 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white mb-3">
                      {iconMap[card.icon]}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-500">{card.desc}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-slate-900 p-5 text-sm">
                <p className="text-slate-400 mb-2 font-mono text-xs">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {heroData.techStack.map((t) => (
                    <span key={t} className="bg-slate-700 text-slate-200 rounded-md px-2.5 py-1 text-xs font-mono">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* ══ DOC SECTIONS ══ */}
            {docSections.map((section) => (
              <DocSection key={section.id} section={section} />
            ))}

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
