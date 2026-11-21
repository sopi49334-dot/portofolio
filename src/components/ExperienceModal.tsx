import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import type { ExperienceItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ExperienceModal({
  experience,
  onClose,
  onPrev,
  onNext,
}: ExperienceModalProps) {
  useEffect(() => {
    if (!experience) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [experience, onClose, onPrev, onNext]);

  if (!experience) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-exp-title"
      className="fixed inset-0 z-50 bg-espresso-dark/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-butter text-espresso max-w-4xl w-full rounded-2xl border-2 border-espresso/30 shadow-scrapbook-deep p-6 sm:p-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-3 left-10 w-20 h-5 washi-tape pointer-events-none" />

        {/* Modal Top Controls */}
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-espresso/15 mb-6">
          <div className="flex items-center gap-2 font-mono text-xs text-espresso/75">
            <span className="font-bold text-gold-star">{experience.frameTag}</span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {experience.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous project"
              className="p-2 rounded-lg border border-espresso/20 bg-white/80 hover:bg-espresso hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next project"
              className="p-2 rounded-lg border border-espresso/20 bg-white/80 hover:bg-espresso hover:text-cream transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project detail"
              className="p-2 rounded-lg bg-espresso text-cream hover:bg-gold-star transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-star"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 bg-white p-3 rounded-xl border border-espresso/20 shadow-sm">
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-espresso/5 border border-espresso/10">
              <ResilientImage
                src={experience.imageUrl}
                alt={experience.imageAlt}
                fallbackType={experience.fallbackType}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] text-espresso/70">
              <span>{experience.frameTitle}</span>
              <span>{experience.frameFooterRole}</span>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <p className="font-mono text-[11px] font-bold tracking-widest uppercase text-gold-star mb-1">
                {experience.badge}
              </p>
              <h3
                id="modal-exp-title"
                className="font-serif text-3xl font-bold text-espresso leading-tight"
              >
                {experience.title}
              </h3>
              <p className="font-mono text-xs text-espresso/65 mt-1">{experience.period}</p>
            </div>

            <div className="space-y-3 text-sm text-ink/85 leading-relaxed">
              <p>{experience.desc1}</p>
              <p>{experience.desc2}</p>
            </div>

            <div className="bg-white/80 p-4 rounded-xl border border-espresso/15">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-espresso mb-2.5">
                Key Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-ink/85">
                {experience.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold-star font-bold mt-0.5" aria-hidden="true">
                      ★
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-espresso/15 flex flex-wrap items-center gap-2 font-mono text-[11px] text-espresso/80">
              <span className="font-bold text-espresso">Tools:</span>
              {experience.tools.map((tool, idx) => (
                <span key={tool} className="inline-flex items-center gap-2">
                  {idx > 0 && <span aria-hidden="true">·</span>}
                  <span>{tool}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
