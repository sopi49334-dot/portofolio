import { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, MessageCircle, Maximize2 } from 'lucide-react';
import {
  EDUCATION_TIMELINE,
  EXPERIENCES,
  HERO_PORTRAIT_URL,
  POLAROID_SNAP_URL,
  PROFILE_SPECS,
  SKILL_GROUPS,
  STRENGTHS,
} from './data/portfolioData';
import { ResilientImage } from './components/ResilientImage';
import { BarcodeStrip, BinderClip } from './components/ScrapbookElements';
import { ExperienceModal } from './components/ExperienceModal';

export default function App() {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [modalExpIndex, setModalExpIndex] = useState<number | null>(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    detail: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const activeExperience = EXPERIENCES[activeExpIndex];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('sopi49334@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback if clipboard API is unavailable
      setCopiedEmail(false);
    }
  };

  const visibleSkillGroups =
    activeSkillCategory === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.id === activeSkillCategory);

  return (
    <div className="min-h-screen bg-cream text-ink font-sans">
      {/* Sticky Top Bar (3-zone contract: Brand — Nav Links — Primary CTA) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/92 border-b border-espresso/15 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
          <a
            href="#hero"
            className="font-script text-3xl font-bold text-espresso hover:text-gold-star transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-star"
          >
            Sopi.
          </a>

          <nav
            aria-label="Primary Navigation"
            className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium tracking-wide overflow-x-auto"
          >
            <a
              href="#about"
              className="text-espresso hover:text-gold-star hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              About
            </a>
            <a
              href="#strengths"
              className="text-espresso hover:text-gold-star hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Why Me
            </a>
            <a
              href="#experience"
              className="text-espresso hover:text-gold-star hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-espresso hover:text-gold-star hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
          </nav>

          <a
            href="#contact"
            className="px-3.5 py-2 bg-espresso text-cream hover:bg-gold-star font-mono text-xs uppercase tracking-wider rounded transition-colors duration-200 shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        {/* 1. HERO SECTION: ID Badge Card on Espresso Grid */}
        <section
          id="hero"
          className="relative py-16 md:py-24 bg-espresso-grid overflow-hidden flex items-center justify-center min-h-[88vh]"
        >
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold-star/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-butter/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl w-full mx-auto px-4 relative z-10">
            <div className="relative mx-auto max-w-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 ease-out">
              <BinderClip size="md" />

              {/* Main ID Card Box */}
              <div className="relative bg-butter rounded-2xl p-6 sm:p-10 border-2 border-espresso/25 shadow-scrapbook-deep mt-4">
                <div className="border border-dashed border-espresso/35 rounded-xl p-5 sm:p-8 relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-3 left-4 text-gold-star text-2xl select-none"
                  >
                    ★
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 text-gold-star text-xl select-none"
                  >
                    ★
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Metadata Column */}
                    <div className="md:col-span-7 flex flex-col justify-between">
                      <div>
                        <span className="inline-block font-mono text-[11px] font-bold tracking-widest uppercase text-espresso/75 mb-2 border-b border-espresso/20 pb-0.5">
                          Technical &amp; Creative Portfolio · 2026
                        </span>
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-espresso leading-[1.05] uppercase text-balance">
                          CREATIVE
                          <br />
                          PORTFOLIO
                        </h1>

                        {/* Script Name Presentation */}
                        <div className="my-4">
                          <p className="font-script text-4xl sm:text-5xl font-bold text-espresso leading-none transform -rotate-2">
                            Sopi Fadhillah
                          </p>
                          <p className="font-script text-2xl sm:text-3xl text-espresso/85 leading-none pl-6 -mt-0.5">
                            Nur Azizah
                          </p>
                        </div>

                        <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-espresso/85 font-semibold pt-2 border-t border-espresso/15">
                          Informatics Student · CAD Drafter · Site Inspector
                        </p>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                          href="#experience"
                          className="px-5 py-2.5 bg-espresso text-cream text-xs font-mono font-semibold uppercase tracking-wider rounded shadow hover:bg-gold-star transition-colors duration-200 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                        >
                          <span>Explore Portfolio</span>
                          <span aria-hidden="true">↓</span>
                        </a>
                        <a
                          href="#contact"
                          className="px-5 py-2.5 border border-espresso/40 hover:bg-espresso/5 text-espresso text-xs font-mono font-semibold uppercase tracking-wider rounded transition-colors duration-200 whitespace-nowrap shrink-0"
                        >
                          Contact Me
                        </a>
                      </div>
                    </div>

                    {/* Right Card Column: Photo, Stamp & Barcode */}
                    <div className="md:col-span-5 flex flex-col items-center">
                      <div className="relative w-full max-w-[240px]">
                        <div
                          aria-hidden="true"
                          className="absolute -top-5 -left-5 z-20 w-16 h-16 bg-espresso rounded-full flex items-center justify-center text-butter font-bold text-xs tracking-tighter transform -rotate-12 shadow-md border border-butter/30"
                        >
                          <span className="text-center font-mono leading-none">
                            TECH
                            <br />+ CAD
                          </span>
                        </div>

                        {/* Framed Photo Container */}
                        <div className="bg-white p-2.5 rounded-lg shadow-md border border-espresso/20 transform rotate-1 hover:rotate-0 transition-transform duration-200">
                          <div className="w-full aspect-[4/5] bg-espresso/10 rounded overflow-hidden relative border border-espresso/10">
                            <ResilientImage
                              src={HERO_PORTRAIT_URL}
                              alt="Sopi Fadhillah Nur Azizah - Portrait"
                              fallbackType="portrait"
                              eager
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 inset-x-2 bg-espresso/90 backdrop-blur-xs text-cream text-[10px] font-mono py-1 rounded tracking-wider uppercase text-center">
                              ITPLN · TKP
                            </div>
                          </div>
                        </div>

                        <BarcodeStrip />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. WHY WORK WITH SOPI: 4 Tilted Sticky Notes on Cream Grid */}
        <section id="strengths" className="py-20 bg-cream-grid border-b border-espresso/15 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-14">
              <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-espresso text-balance">
                WHY WORK
                <br />
                WITH SOPI?
              </h2>
              <div className="mt-2 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-gold-star inline-block shrink-0" />
                <p className="font-mono text-xs sm:text-sm font-bold tracking-widest text-espresso/80 uppercase">
                  My Technical Approach: Precision + Structure + Digital Innovation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
              {STRENGTHS.map((item) => (
                <article
                  key={item.id}
                  className={`group relative bg-butter p-6 pt-8 rounded shadow-sticky border border-espresso/15 transform ${item.rotation} hover:rotate-0 hover:-translate-y-1.5 transition-transform duration-200 flex flex-col justify-between`}
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 h-6 washi-tape" />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2.5 right-3 text-gold-star text-lg select-none"
                  >
                    ★
                  </span>

                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-espresso/65 mb-1 tabular-nums">
                      {item.index}. {item.category}
                    </p>
                    <h3 className="font-script text-[28px] sm:text-[30px] leading-tight font-bold text-espresso mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-ink/85 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-espresso/10 font-mono text-[10px] text-espresso/70 uppercase pr-5">
                    {item.footer}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. ABOUT ME & PROFILE SPEC SHEET (3-Column Split) */}
        <section id="about" className="border-b border-espresso/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
            {/* Left Side: Editorial Story on Deep Espresso Grid */}
            <div className="lg:col-span-5 bg-espresso-grid text-cream p-8 sm:p-12 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-espresso/30">
              <div>
                <span aria-hidden="true" className="text-gold-star text-2xl select-none inline-block mb-3">
                  ★
                </span>
                <h2 className="font-script text-4xl sm:text-5xl text-cream leading-tight">
                  Hey, I&apos;m Sopi!
                </h2>
                <div className="mt-6 space-y-4 text-xs sm:text-sm text-cream/90 font-normal leading-relaxed">
                  <p>
                    Saya mahasiswi{' '}
                    <strong className="text-cream font-semibold">
                      Teknik Informatika di Institut Teknologi PLN (ITPLN)
                    </strong>{' '}
                    yang memiliki fondasi vokasi solid di bidang{' '}
                    <strong className="text-cream font-semibold">
                      Desain Pemodelan &amp; Informasi Bangunan / Teknik Konstruksi Perumahan (SMKN 4 Jakarta)
                    </strong>
                    .
                  </p>
                  <p>
                    Kombinasi latar belakang ini membentuk cara kerja yang terstruktur: memahami kalkulasi ruang,
                    presisi gambar kerja (AutoCAD &amp; SketchUp), pengawasan lapangan langsung, sekaligus logika
                    algoritma dan pemrograman modern.
                  </p>
                  <p>
                    Berorientasi pada kerapian, ketepatan detail data inventaris, dan kolaborasi aktif dalam proyek
                    teknik maupun teknologi.
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-cream/15 font-mono text-xs text-cream/80 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-gold-star" aria-hidden="true">§</span>
                  <span>Cilincing, Jakarta Utara, DKI Jakarta</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold-star" aria-hidden="true">§</span>
                  <a
                    href="mailto:sopi49334@gmail.com"
                    className="hover:text-cream underline decoration-cream/35 underline-offset-4"
                  >
                    sopi49334@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 tabular-nums">
                  <span className="text-gold-star" aria-hidden="true">§</span>
                  <span>+62 882-8954-6560</span>
                </div>
              </div>
            </div>

            {/* Center: Scrapbook Collage Badge Strip on Sage Sand */}
            <div className="lg:col-span-3 bg-sage-sand p-8 flex flex-col items-center justify-center relative overflow-hidden border-b lg:border-b-0 lg:border-r border-espresso/20">
              <div className="relative w-full max-w-[220px] flex flex-col items-center">
                <div
                  aria-hidden="true"
                  className="w-10 h-3 bg-neutral-700 rounded-sm mb-[-6px] z-20 shadow-sm border border-neutral-600"
                />
                {/* Polaroid Frame */}
                <div className="bg-white p-3 pb-5 rounded shadow-polaroid border border-espresso/20 w-full transform -rotate-3 hover:rotate-0 transition-transform duration-200">
                  <div className="aspect-square bg-espresso/10 rounded overflow-hidden">
                    <ResilientImage
                      src={POLAROID_SNAP_URL}
                      alt="Scrapbook studio snapshot"
                      fallbackType="polaroid"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 font-script text-center text-espresso text-lg leading-tight font-bold">
                    in my element
                  </p>
                </div>

                {/* Letter Cutout Badges S - O - P - I */}
                <div className="flex items-center gap-1.5 mt-5" aria-label="S O P I monogram">
                  <span className="w-8 h-8 rounded-full bg-espresso text-cream font-mono font-bold flex items-center justify-center text-xs shadow-md border border-butter">
                    S
                  </span>
                  <span className="w-8 h-8 rounded-full bg-butter text-espresso font-mono font-bold flex items-center justify-center text-xs shadow-md border border-espresso/30">
                    O
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gold-star text-cream font-mono font-bold flex items-center justify-center text-xs shadow-md border border-butter">
                    P
                  </span>
                  <span className="w-8 h-8 rounded-full bg-espresso text-cream font-mono font-bold flex items-center justify-center text-xs shadow-md border border-butter">
                    I
                  </span>
                </div>

                {/* Torn Lined Paper Quote Scrap */}
                <div className="mt-5 bg-lined-paper p-4 rounded shadow border border-espresso/15 transform rotate-2 w-full">
                  <div className="w-12 h-3 washi-tape mx-auto -mt-5 mb-2" />
                  <p className="font-script text-base text-espresso leading-snug text-center">
                    &ldquo;building strong foundations in code &amp; construction.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Creator Profile Spec Sheet */}
            <div className="lg:col-span-4 bg-cream-grid p-6 sm:p-10 flex flex-col justify-center">
              <div className="bg-white/95 p-6 rounded-xl border border-espresso/20 shadow-scrapbook relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-3.5 right-6 w-9 h-6 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-700 rounded-sm shadow border border-amber-900/30 flex items-center justify-center"
                >
                  <div className="w-4 h-1 bg-amber-900/40 rounded-full" />
                </div>

                <div className="border-b-2 border-espresso pb-2 mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-espresso/65 uppercase block">
                    Candidate Metadata
                  </span>
                  <h3 className="font-serif text-2xl font-bold uppercase tracking-wide text-espresso">
                    CREATOR PROFILE
                  </h3>
                </div>

                <dl className="space-y-3 font-mono text-xs">
                  {PROFILE_SPECS.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-12 gap-2 ${
                        idx < PROFILE_SPECS.length - 1
                          ? 'pb-2 border-b border-dashed border-espresso/15'
                          : ''
                      }`}
                    >
                      <dt className="col-span-5 font-bold uppercase text-espresso/70 text-[10px]">
                        {row.label}
                      </dt>
                      <dd
                        className={`col-span-7 ${
                          row.available
                            ? 'text-emerald-800 font-semibold'
                            : row.highlight
                              ? 'text-espresso font-semibold'
                              : 'text-espresso'
                        }`}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 pt-3 border-t border-espresso/20 flex justify-between items-end">
                  <span className="font-mono text-[10px] text-espresso/55 uppercase">
                    Verified Specimen
                  </span>
                  <span className="font-script text-2xl text-espresso font-bold">Sopi F.N.A</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FEATURED EXPERIENCE & PROJECTS (Sage Grid) */}
        <section id="experience" className="py-20 bg-sage-grid border-b border-espresso/20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Tabs + Dynamic Detail Card */}
              <div className="lg:col-span-5">
                <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-espresso leading-none text-balance">
                  FEATURED
                  <br />
                  EXPERIENCE
                </h2>
                <div className="mt-2 flex items-center gap-2 mb-8">
                  <span className="w-6 h-[2px] bg-espresso inline-block shrink-0" />
                  <p className="font-mono text-xs tracking-widest text-espresso uppercase font-bold">
                    Professional Apprenticeships &amp; Drafting
                  </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-col gap-2.5 mb-8" role="tablist" aria-label="Experience Projects">
                  {EXPERIENCES.map((exp, index) => {
                    const isActive = index === activeExpIndex;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveExpIndex(index)}
                        className={`text-left p-3.5 rounded-lg border border-espresso/20 font-mono text-xs uppercase tracking-wider transition-colors duration-200 flex items-center justify-between gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star ${
                          isActive
                            ? 'bg-espresso text-cream shadow-xs'
                            : 'bg-butter/70 hover:bg-butter text-espresso'
                        }`}
                      >
                        <span className="truncate">{exp.tabLabel}</span>
                        <span
                          aria-hidden="true"
                          className={isActive ? 'text-gold-star font-bold' : 'text-espresso/50'}
                        >
                          →
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Experience Detail Card */}
                <div className="bg-white/95 p-6 rounded-xl border border-espresso/20 shadow-scrapbook relative">
                  <div className="absolute -top-3 left-6 w-16 h-5 washi-tape" />

                  <p className="font-mono text-[10px] tracking-widest uppercase font-bold text-gold-star mb-1">
                    {activeExperience.badge}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-espresso leading-snug">
                    {activeExperience.title}
                  </h3>
                  <p className="font-mono text-xs text-espresso/65 mb-4">{activeExperience.period}</p>

                  <div className="space-y-3 text-xs text-ink/85 leading-relaxed">
                    <div>
                      <h4 className="font-bold text-espresso font-mono uppercase text-[11px]">
                        Tanggung Jawab Utama:
                      </h4>
                      <p>{activeExperience.desc1}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-espresso font-mono uppercase text-[11px]">
                        Pengawasan &amp; Eksekusi:
                      </h4>
                      <p>{activeExperience.desc2}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-espresso/15 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-espresso/80 uppercase">
                      {activeExperience.tags.map((tag, i) => (
                        <span key={tag} className="inline-flex items-center gap-2">
                          {i > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setModalExpIndex(activeExpIndex)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-butter hover:bg-espresso hover:text-cream border border-espresso/25 rounded font-mono text-[10px] uppercase tracking-wider text-espresso transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
                    >
                      <Maximize2 className="w-3 h-3" aria-hidden="true" />
                      <span>Inspect Sheet</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Vertical Drafting Showcase Frames */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {EXPERIENCES.map((exp, index) => {
                    const isSelected = index === activeExpIndex;
                    return (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => {
                          setActiveExpIndex(index);
                          setModalExpIndex(index);
                        }}
                        className={`group text-left bg-white p-3 rounded-2xl shadow-scrapbook border transition-transform duration-200 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star ${
                          index === 1 ? 'md:translate-y-4' : ''
                        } hover:-translate-y-1.5 ${
                          isSelected ? 'border-espresso ring-2 ring-gold-star/50' : 'border-espresso/20'
                        }`}
                      >
                        <div className="w-12 h-1.5 bg-neutral-300 rounded-full mx-auto mb-2" />
                        <div className="aspect-[9/16] w-full bg-espresso/5 rounded-xl border border-espresso/10 overflow-hidden relative flex flex-col justify-between p-3">
                          <ResilientImage
                            src={exp.imageUrl}
                            alt={exp.imageAlt}
                            fallbackType={exp.fallbackType}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="relative z-10 self-start bg-espresso/85 backdrop-blur-xs text-cream px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider">
                            {exp.frameTag}
                          </div>
                          <div className="relative z-10 bg-cream/95 p-2.5 rounded-lg border border-espresso/15 text-espresso shadow-xs">
                            <p className="font-serif font-bold text-xs uppercase leading-tight">
                              {exp.frameTitle}
                            </p>
                            <p className="font-mono text-[9px] text-espresso/75 mt-0.5">
                              {exp.frameSubtitle}
                            </p>
                          </div>
                        </div>

                        <div className="mt-3 text-center border-t border-espresso/10 pt-2 w-full">
                          <p className="font-mono text-[10px] font-bold text-espresso uppercase">
                            {exp.title}
                          </p>
                          <p className="font-mono text-[9px] text-espresso/65">
                            {exp.frameFooterRole}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SKILLS & EDUCATION (Cream Grid) */}
        <section id="skills" className="py-20 bg-cream-grid border-b border-espresso/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span aria-hidden="true" className="text-gold-star text-2xl select-none inline-block mb-1">
                ★
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-tight text-espresso text-balance">
                SKILLS &amp; EDUCATION
              </h2>
              <p className="font-mono text-xs sm:text-sm tracking-widest text-espresso/75 uppercase mt-2">
                Theoretical Foundations &amp; Hands-On Technical Competencies
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Sheet: Ruled Notebook Paper for Education */}
              <div className="lg:col-span-6 bg-lined-paper p-8 sm:p-10 rounded-xl shadow-scrapbook border border-espresso/20 relative transform -rotate-1 hover:rotate-0 transition-transform duration-200">
                <div className="absolute -top-3.5 left-12 w-28 h-6 washi-tape" />

                <div className="border-b-2 border-espresso pb-2 mb-6">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gold-star block">
                    Timeline
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-espresso uppercase tracking-wide">
                    EDUCATION JOURNEY
                  </h3>
                </div>

                <div className="relative space-y-6">
                  <div
                    aria-hidden="true"
                    className="absolute left-[5px] top-2 bottom-2 w-px bg-espresso/25"
                  />
                  {EDUCATION_TIMELINE.map((edu, index) => (
                    <div key={edu.institution} className="relative pl-6">
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-white ${
                          edu.active
                            ? 'bg-espresso'
                            : index === 1
                              ? 'bg-gold-star'
                              : 'bg-espresso/45'
                        }`}
                      />
                      <span className="font-mono text-[11px] text-gold-star font-bold tabular-nums block">
                        {edu.period}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-espresso leading-snug">
                        {edu.institution}
                      </h4>
                      <p className="font-mono text-xs text-espresso/75 mb-1">{edu.program}</p>
                      <p className="text-xs text-ink/85 leading-relaxed font-sans">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t border-espresso/15 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-espresso/65 uppercase">
                    Jakarta Utara · Palembang
                  </span>
                  <span className="font-script text-xl text-espresso">continuously learning ♥</span>
                </div>
              </div>

              {/* Right Sheet: Tilted Butter Sheet with Interactive Skill Selector */}
              <div className="lg:col-span-6 bg-butter p-8 sm:p-10 rounded-xl shadow-scrapbook border border-espresso/20 relative transform rotate-1 hover:rotate-0 transition-transform duration-200">
                <div
                  aria-hidden="true"
                  className="absolute -top-5 right-12 z-20 pointer-events-none flex flex-col items-center"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-neutral-400 -mb-4" />
                  <div className="w-14 h-5 bg-neutral-800 rounded-t-sm shadow border border-neutral-600" />
                </div>

                <div className="border-b-2 border-espresso pb-2 mb-5">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-gold-star block">
                    Competencies
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-espresso uppercase tracking-wide">
                    SKILLS &amp; CAPABILITIES
                  </h3>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6" role="group" aria-label="Filter skills">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'drafting', label: 'CAD & Civil' },
                    { id: 'site', label: 'Site QC' },
                    { id: 'informatics', label: 'Informatics' },
                  ].map((tab) => {
                    const active = activeSkillCategory === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveSkillCategory(tab.id)}
                        className={`px-3 py-1.5 rounded-md font-mono text-[11px] uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star ${
                          active
                            ? 'bg-espresso text-cream'
                            : 'bg-white/80 text-espresso border border-espresso/20 hover:bg-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-6">
                  {visibleSkillGroups.map((group) => (
                    <div key={group.id}>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-espresso/85 mb-2.5 flex items-center gap-2">
                        <span className="text-gold-star" aria-hidden="true">★</span>
                        <span>{group.label}</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((skill) => {
                          const isSelected = selectedSkill?.name === skill.name;
                          return (
                            <button
                              key={skill.name}
                              type="button"
                              onClick={() =>
                                setSelectedSkill(isSelected ? null : { name: skill.name, detail: skill.detail })
                              }
                              className={`px-3 py-1.5 rounded-md border font-mono text-xs font-medium transition-colors duration-150 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star ${
                                isSelected
                                  ? 'bg-gold-star text-white border-gold-star shadow-xs'
                                  : skill.featured
                                    ? 'bg-espresso text-cream border-espresso hover:bg-espresso-dark'
                                    : 'bg-white text-espresso border-espresso/20 hover:border-gold-star'
                              }`}
                            >
                              {skill.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Selected Skill Note */}
                {selectedSkill && (
                  <div className="mt-6 p-3.5 bg-white/95 rounded-lg border border-espresso/20 text-xs text-ink/85">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono font-bold text-espresso">{selectedSkill.name}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedSkill(null)}
                        className="font-mono text-[10px] uppercase text-espresso/60 hover:text-espresso"
                      >
                        Close
                      </button>
                    </div>
                    <p className="leading-relaxed">{selectedSkill.detail}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 6. LET'S CONNECT & FOOTER (Espresso Grid) */}
        <section id="contact" className="py-24 bg-espresso-grid text-cream relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <div className="relative bg-butter text-espresso p-8 sm:p-14 rounded-2xl shadow-scrapbook-deep border-2 border-espresso/30 transform -rotate-1 hover:rotate-0 transition-transform duration-200">
              <BinderClip size="sm" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <span aria-hidden="true" className="text-gold-star text-2xl select-none inline-block mb-1">
                    ★
                  </span>
                  <p className="font-script text-4xl sm:text-5xl font-bold text-espresso leading-none mb-2">
                    Let&apos;s collaborate!
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-tight text-espresso mb-4">
                    GET IN TOUCH
                  </h2>
                  <p className="text-xs sm:text-sm text-ink/85 leading-relaxed font-sans mb-6">
                    Tertarik mendiskusikan peluang magang, proyek drafting CAD, inspeksi lapangan, atau
                    kolaborasi bidang teknologi informatika? Saya selalu terbuka untuk berdiskusi dan
                    berkontribusi.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:sopi49334@gmail.com"
                      className="px-5 py-3 bg-espresso text-cream font-mono text-xs uppercase tracking-wider font-semibold rounded hover:bg-gold-star transition-colors duration-200 shadow inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Kirim Email</span>
                    </a>
                    <a
                      href="https://wa.me/6288289546560"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="px-5 py-3 border border-espresso/40 hover:bg-espresso/5 text-espresso font-mono text-xs uppercase tracking-wider font-semibold rounded transition-colors duration-200 inline-flex items-center gap-2 whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>WhatsApp Chat</span>
                      <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-4 py-3 border border-espresso/25 bg-white/75 hover:bg-white text-espresso font-mono text-xs uppercase tracking-wider rounded transition-colors duration-200 inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Postcard Stamp & Details */}
                <div className="md:col-span-5 bg-white/85 p-5 rounded-xl border border-dashed border-espresso/30 flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-mono text-[10px] tracking-widest uppercase font-bold text-espresso/65">
                        POSTAGE PAID
                      </p>
                      <p className="font-mono text-xs font-bold text-espresso">JAKARTA · ID</p>
                    </div>
                    <div className="w-14 h-16 border-2 border-dashed border-espresso/40 bg-butter/80 rounded flex flex-col items-center justify-center p-1 transform rotate-3">
                      <span aria-hidden="true" className="text-gold-star text-base">★</span>
                      <span className="font-mono text-[8px] uppercase tracking-tighter text-espresso font-bold">
                        SOPI
                      </span>
                      <span className="font-mono text-[7px] text-espresso/65">ITPLN</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs text-espresso/85 pt-2 border-t border-espresso/15">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-espresso/60 block">
                        Email Address
                      </span>
                      <span className="font-semibold break-all">sopi49334@gmail.com</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-espresso/60 block">
                        Phone / WhatsApp
                      </span>
                      <span className="font-semibold tabular-nums">0882-8954-6560</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-espresso/60 block">
                        Domicile
                      </span>
                      <span>Cilincing, Jakarta Utara, ID</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-cream/15 text-center font-mono text-xs text-cream/70 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>© 2026 Sopi Fadhillah Nur Azizah. All rights reserved.</p>
              <div className="flex items-center gap-3">
                <span>Informatics · ITPLN</span>
                <span aria-hidden="true">·</span>
                <span>SMKN 4 Jakarta</span>
                <span aria-hidden="true">·</span>
                <a href="#hero" className="text-gold-star hover:underline underline-offset-4">
                  Back to top ↑
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>

      <ExperienceModal
        experience={modalExpIndex !== null ? EXPERIENCES[modalExpIndex] : null}
        onClose={() => setModalExpIndex(null)}
        onPrev={() =>
          setModalExpIndex((prev) =>
            prev === null ? 0 : (prev - 1 + EXPERIENCES.length) % EXPERIENCES.length
          )
        }
        onNext={() =>
          setModalExpIndex((prev) =>
            prev === null ? 0 : (prev + 1) % EXPERIENCES.length
          )
        }
      />
    </div>
  );
}
