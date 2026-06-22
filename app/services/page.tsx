"use client";

import { useState } from "react";

const categories = [
  { id: "all", label: "All Services" },
  { id: "admin", label: "HR Admin & Talent" },
  { id: "relations", label: "Labour Relations & BBEE" },
  { id: "development", label: "Skills & Training" },
];

const services = [
  {
    title: "HR Outsourcing & Admin",
    category: "admin",
    shortCopy: "Flawless payroll management, employment contracts, HR policies, and employee handbooks.",
    deliverables: [
      "Flawless monthly payroll administration & statutory returns (UIF, PAYE, SDL)",
      "Drafting and review of basic conditions of employment contracts",
      "Tailormade company policies and comprehensive employee handbooks",
      "Statutory audits to ensure full compliance with the Basic Conditions of Employment Act (BCEA)",
      "Daily HR administration and employee records setup"
    ]
  },
  {
    title: "Industrial & Labour Relations",
    category: "relations",
    shortCopy: "CCMA representation, chairing hearings, union negotiations, and disciplinary codes.",
    deliverables: [
      "CCMA case preparation, representation, and advisory services",
      "Professional independent chairing of disciplinary hearings and grievances",
      "Union negotiation support and strike management consulting",
      "Facilitating compliant retrenchment processes (Section 189)",
      "Drafting and implementation of company-specific Disciplinary Codes"
    ]
  },
  {
    title: "Skills Development & Equity",
    category: "development",
    shortCopy: "Workplace Skills Plans (WSP), Annual Training Reports (ATR), and learnerships.",
    deliverables: [
      "Compiling and submitting Workplace Skills Plans (WSP) and Annual Training Reports (ATR)",
      "SETA registrations, accreditation support, and managing mandatory grants",
      "Establishing and training Employment Equity (EE) committees",
      "Drafting and submission of statutory Employment Equity reports (EEA2 & EEA4)",
      "Sourcing, setting up, and managing tax-incentivized learnership programmes"
    ]
  },
  {
    title: "B-BBEE Consulting",
    category: "relations",
    shortCopy: "Scorecard verification, gap analysis, and strategic implementation.",
    deliverables: [
      "Pre-evaluation gap analysis to estimate potential B-BBEE levels",
      "Verification file compilation and management of the audit process",
      "Strategic alignment of Skills Development and Procurement to optimize scorecard points",
      "Socio-Economic Development (SED) and Enterprise Development (ED) planning",
      "Ongoing advisory for sustainable BEE rating improvements"
    ]
  },
  {
    title: "Talent Acquisition",
    category: "admin",
    shortCopy: "Rigorous background checks, sourcing, interviewing, and structured onboarding.",
    deliverables: [
      "Customised job profiling and advertising campaigns",
      "Rigorous background, reference, qualification, and credit checks",
      "Psychologically-informed interview structures and evaluations",
      "Comprehensive onboarding systems to accelerate time-to-productivity",
      "Ad-hoc executive search and talent pipelines"
    ]
  },
  {
    title: "Wellness & Change Management",
    category: "admin",
    shortCopy: "Employee Assistance Programmes (EAPs), mental health awareness, and restructuring.",
    deliverables: [
      "Designing Employee Assistance Programmes (EAPs) tailored to business sizes",
      "Workplace mental health awareness workshops and stress management tools",
      "Managing communication plans during corporate restructuring or mergers",
      "Conflict mediation between team members and management",
      "Building resilient organizational cultures post-crisis"
    ]
  },
];

const process = [
  "Consultation & Risk Assessment: We analyze your current HR setup and identify compliance risks.",
  "Strategy & Implementation: We build tailored policies, contracts, and systems to protect your business.",
  "Ongoing Management: We handle the day-to-day HR administration, payroll, and IR matters.",
  "Continuous Protection: We act as your shield during CCMA referrals, disputes, and restructuring.",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const filteredServices = services.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Our Services</p>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary-strong md:text-5xl">
            Complete HR solutions designed to protect and support your business.
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80">
            We provide flexible, fully compliant HR outsourcing solutions. Filter our services below and click any card to explore exact deliverables and sub-services.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="mx-auto w-full max-w-6xl px-6 mb-8">
        <div className="flex flex-wrap gap-2 border-b border-primary/10 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setExpandedService(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/70 hover:bg-primary/10 hover:text-primary-strong"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => {
            const isExpanded = expandedService === service.title;
            return (
              <article
                key={service.title}
                onClick={() => toggleExpand(service.title)}
                className={`rounded-3xl p-8 shadow-sm ring-1 ring-primary/10 transition-all cursor-pointer select-none hover:-translate-y-1 ${
                  isExpanded ? "bg-white ring-primary/30 shadow-md md:col-span-2 lg:col-span-3" : "bg-surface"
                }`}
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-primary-strong">{service.title}</h2>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary-strong uppercase tracking-wider">
                    {service.category === "admin" ? "Admin" : service.category === "relations" ? "Labour/BEE" : "Skills"}
                  </span>
                </div>
                
                <p className="mt-3 leading-7 text-foreground/75">{service.shortCopy}</p>

                {isExpanded ? (
                  <div className="mt-6 pt-6 border-t border-primary/10 animate-fade-in">
                    <p className="font-semibold text-primary-strong mb-4">Detailed Deliverables & Coverage:</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 text-xs text-secondary font-medium">Click card again to collapse</p>
                  </div>
                ) : (
                  <p className="mt-4 text-xs font-semibold text-primary/70 hover:text-primary">
                    Click to view exact deliverables &rarr;
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-primary-strong py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/65">How it works</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">A structured, reassuring process.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {process.map((step, index) => {
              const [title, description] = step.split(": ");
              return (
                <div key={step} className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-white/70">Step {index + 1}</p>
                  <p className="mt-2 font-semibold text-white">{title}</p>
                  <p className="mt-1 leading-7 text-white/85">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}