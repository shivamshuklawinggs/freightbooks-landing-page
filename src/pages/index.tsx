import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {
  navLinks, heroBadges, heroStats,
  features, modules, howItWorks, footerLinks,
} from "@/data/landing";

/* â”€â”€â”€ Navbar â”€â”€â”€ */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">FB</div>
          <span className="font-bold text-slate-900 text-lg">FreightBooks</span>
        </div>
        <div className="hidden md:flex items-center gap-1 ml-4">
          {navLinks.map(({href,label})=>(
            <a key={href} href={href} className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">{label}</a>
          ))}
          <Link href="/docs" className="px-3 py-1.5 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors">Docs</Link>
        </div>
        <div className="flex-1" />
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Get Started</a>
        <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 text-slate-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-2">
          {[...navLinks, { href: "#contact", label: "Get Started" }].map(({href,label})=>(
            <a key={href} href={href} onClick={()=>setOpen(false)} className="py-2 text-sm text-slate-700 border-b border-slate-100">{label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}


export default function Home() {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>FreightBooks - Freight Management & Accounting Software</title>
        <meta name="description" content="FreightBooks is the all-in-one TMS for freight brokers and trucking companies. Dispatch loads, generate invoices, track trucks live, and run full accounting reports." />
        <meta name="keywords" content="freight management software, TMS, freight broker software, load tracking, trucking software, freight accounting, dispatch software, GPS truck tracking, invoice freight, load board" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="FreightBooks" />
        <link rel="canonical" href="https://freightbooks.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FreightBooks" />
        <meta property="og:title" content="FreightBooks - Freight Management & Accounting Software" />
        <meta property="og:description" content="All-in-one TMS for freight brokers and trucking companies. Load dispatching, invoicing, GPS tracking, and complete accounting." />
        <meta property="og:url" content="https://freightbooks.com" />
        <meta property="og:image" content="https://freightbooks.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FreightBooks - Freight Management Platform" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@freightbooks" />
        <meta name="twitter:title" content="FreightBooks - Freight Management & Accounting Software" />
        <meta name="twitter:description" content="All-in-one TMS for freight brokers and trucking companies. Load dispatching, invoicing, GPS tracking, and full accounting." />
        <meta name="twitter:image" content="https://freightbooks.com/images/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://freightbooks.com/#organization",
              "name": "FreightBooks",
              "url": "https://freightbooks.com",
              "logo": { "@type": "ImageObject", "url": "https://freightbooks.com/images/logo.png" },
              "sameAs": []
            },
            {
              "@type": "WebSite",
              "@id": "https://freightbooks.com/#website",
              "url": "https://freightbooks.com",
              "name": "FreightBooks",
              "publisher": { "@id": "https://freightbooks.com/#organization" }
            },
            {
              "@type": "SoftwareApplication",
              "name": "FreightBooks",
              "url": "https://freightbooks.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "All-in-one freight management and accounting platform for freight brokers and trucking companies.",
              "featureList": ["Load Management","Invoicing & Billing","GPS Truck Tracking","Financial Reports","Carrier Management","Customer CRM","Double-Entry Accounting"],
              "publisher": { "@id": "https://freightbooks.com/#organization" }
            }
          ]
        }) }} />
      </Head>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />

        {/* â•â• HERO â•â• */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {heroBadges.map(b=>(
                    <span key={b.label} className={`text-xs rounded-full px-3 py-1 font-medium ${b.className}`}>{b.label}</span>
                  ))}
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
                  Manage Every Load.<br />
                  <span className="text-blue-400">Invoice. Track. Report.</span>
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
                  FreightBooks is the all-in-one platform for freight brokers and trucking companies â€” from dispatching loads to collecting payments, with full double-entry accounting built in.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#video-demo" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Watch Demo
                  </a>
                  <a href="#features" className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                    Explore Features
                  </a>
                </div>
                <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-slate-700/50">
                  {heroStats.map(({value:val,label})=>(
                    <div key={label}>
                      <p className="text-2xl font-bold text-white">{val}</p>
                      <p className="text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <Image src="/images/hero.svg" alt="FreightBooks application screenshot showing load board, invoicing, and dashboard" width={700} height={437} className="rounded-xl shadow-2xl border border-slate-700" priority />
              </div>
            </div>
          </div>
        </section>

        {/* â•â• VIDEO DEMO â•â• */}
        <section id="video-demo" className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 uppercase tracking-wider">Product Demo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-3">See FreightBooks in Action</h2>
            <p className="text-slate-500 mb-10 max-w-xl mx-auto">Watch a full walkthrough of the platform â€” from creating your first load to collecting payment and generating reports.</p>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video">
              {/* Replace the src with your actual YouTube embed URL */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="FreightBooks Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-slate-400 mt-3">Replace the video URL in <code className="bg-slate-100 rounded px-1">index.tsx</code> with your actual demo video.</p>
          </div>
        </section>

        {/* â•â• FEATURES SHOWCASE â•â• */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 uppercase tracking-wider">Core Features</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-3">Everything Your Freight Business Needs</h2>
              <p className="text-slate-500 max-w-xl mx-auto">A complete operating system for freight â€” see exactly how each module looks and works.</p>
            </div>

            {features.map((feat, i) => {
              const isLast = i === features.length - 1;
              const screenshot = (
                <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
                  <Image
                    src={feat.imageSrc}
                    alt={feat.imageAlt}
                    width={1200}
                    height={750}
                    className="w-full h-auto"
                  />
                </div>
              );
              const textBlock = (
                <div>
                  <span className={`text-xs font-semibold rounded-full px-3 py-1 ${feat.badgeClassName}`}>{feat.badgeLabel}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-3">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{feat.description}</p>
                  <ul className="space-y-2">
                    {feat.bullets.map(f=>(
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className={`w-4 h-4 ${feat.bulletColor} shrink-0`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
              return (
                <div key={feat.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isLast ? '' : 'mb-24'}`}>
                  {feat.reverse
                    ? <><div className="order-2 lg:order-1">{screenshot}</div><div className="order-1 lg:order-2">{textBlock}</div></>
                    : <>{textBlock}{screenshot}</>}
                </div>
              );
            })}
          </div>
        </section>

        {/* â•â• ALL MODULES â•â• */}
        <section id="modules" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 uppercase tracking-wider">All Modules</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-3">Everything in One Platform</h2>
              <p className="text-slate-500 max-w-lg mx-auto">28 interconnected modules covering every aspect of your freight operation and accounting.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {modules.map(m=>(
                <div key={m.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-xl shrink-0">{m.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{m.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•â• HOW IT WORKS â•â• */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-xs font-semibold text-green-600 bg-green-50 border border-green-200 rounded-full px-3 py-1 uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-14">From Load to Payment in 4 Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((s,i)=>(
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  {i < 3 && <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0" />}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl flex items-center justify-center shadow-lg mb-4">{s.icon}</div>
                  <span className="text-xs font-bold text-blue-400 mb-1">STEP {s.step}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â•â• CTA â•â• */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Run Your Freight Operation Smarter?</h2>
            <p className="text-blue-200 text-lg mb-8">Join freight brokers and trucking companies already using FreightBooks to dispatch, invoice, and grow.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#video-demo" className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch Demo
              </a>
              <Link href="/docs" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Read the Docs
              </Link>
            </div>
          </div>
        </section>

        {/* â•â• FOOTER â•â• */}
        <footer className="bg-slate-900 text-slate-400 py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white text-xs font-bold">FB</div>
              <span className="font-semibold text-slate-300">FreightBooks</span>
              <span className="text-slate-600 text-xs ml-2">Transport Service Accounting System</span>
            </div>
            <div className="flex gap-4 text-sm">
              {footerLinks.map(l=>(
                l.external === false
                  ? <Link key={l.href} href={l.href} className="hover:text-slate-200 transition-colors">{l.label}</Link>
                  : <a key={l.href} href={l.href} className="hover:text-slate-200 transition-colors">{l.label}</a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

