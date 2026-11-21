import { useState } from 'react';
import { Compass, Layers, Ruler, User } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType: 'portrait' | 'polaroid' | 'cad-site' | 'cad-structure' | 'cad-3d';
  eager?: boolean;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackType,
  eager = false,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ArchitecturalFallback type={fallbackType} alt={alt} />;
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}

function ArchitecturalFallback({
  type,
  alt,
}: {
  type: ResilientImageProps['fallbackType'];
  alt: string;
}) {
  if (type === 'portrait') {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#EFEAD6] via-[#DFD8B8] to-[#C8BEA0] flex flex-col items-center justify-center p-4 text-espresso relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #482A22 1px, transparent 1px), linear-gradient(to bottom, #482A22 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="relative z-10 w-16 h-16 rounded-full border-2 border-espresso/30 bg-butter/80 flex items-center justify-center mb-2 shadow-sm">
          <User className="w-8 h-8 text-espresso/75" strokeWidth={1.5} />
        </div>
        <span className="relative z-10 font-script text-xl font-bold text-espresso leading-none">
          Sopi F.N.A
        </span>
        <span className="relative z-10 font-mono text-[9px] uppercase tracking-widest text-espresso/65 mt-1">
          Portrait Specimen
        </span>
      </div>
    );
  }

  if (type === 'polaroid') {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full bg-gradient-to-br from-[#F3EED8] to-[#DFD8B8] flex flex-col items-center justify-center p-3 text-espresso relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(#482A22 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />
        <Compass className="w-10 h-10 text-espresso/65 mb-1.5 relative z-10" strokeWidth={1.4} />
        <span className="font-mono text-[9px] uppercase tracking-widest text-espresso/70 relative z-10 text-center">
          Studio &amp; Field Snap
        </span>
      </div>
    );
  }

  const iconMap = {
    'cad-site': {
      Icon: Compass,
      code: 'SHEET A-101',
      label: 'Site & Shop Drawing',
    },
    'cad-structure': {
      Icon: Layers,
      code: 'SHEET S-204',
      label: '2-Story Structural Plan',
    },
    'cad-3d': {
      Icon: Ruler,
      code: 'MODEL 3D-03',
      label: 'SketchUp & RAB Studio',
    },
  };

  const config = iconMap[type];
  const Icon = config.Icon;

  return (
    <div
      role="img"
      aria-label={alt}
      className="w-full h-full bg-[#361E18] flex flex-col items-center justify-center p-4 text-cream relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F6F4EA 1px, transparent 1px), linear-gradient(to bottom, #F6F4EA 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10 w-12 h-12 rounded-lg border border-gold-star/60 bg-espresso/90 flex items-center justify-center mb-2">
        <Icon className="w-6 h-6 text-gold-star" strokeWidth={1.6} />
      </div>
      <span className="relative z-10 font-mono text-[10px] tracking-widest text-gold-star uppercase">
        {config.code}
      </span>
      <span className="relative z-10 font-serif text-sm text-cream/90 text-center mt-0.5">
        {config.label}
      </span>
    </div>
  );
}
