export function BinderClip({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const isSmall = size === 'sm';
  return (
    <div
      aria-hidden="true"
      className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center"
    >
      <svg
        className="drop-shadow-md"
        fill="none"
        height={isSmall ? 30 : 34}
        viewBox="0 0 46 34"
        width={isSmall ? 40 : 46}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 32V10C14 5.58172 17.5817 2 22 2H24C28.4183 2 32 5.58172 32 10V32"
          stroke="#A8A8A8"
          strokeLinecap="round"
          strokeWidth="3.5"
        />
        <path
          d="M16 32V12C16 8.68629 18.6863 6 22 6C25.3137 6 28 8.68629 28 12V32"
          stroke="#D1D5DB"
          strokeWidth="1.8"
        />
      </svg>
      <div
        className={`${
          isSmall ? 'w-16 h-6' : 'w-20 h-7'
        } bg-gradient-to-b from-[#2e2e2e] via-[#1f1f1f] to-[#121212] rounded-t-sm rounded-b-md shadow-lg border border-neutral-700/60 flex items-center justify-center -mt-1`}
      >
        <div className={`${isSmall ? 'w-12' : 'w-16'} h-1 bg-neutral-500/30 rounded-full`} />
      </div>
    </div>
  );
}

export function BarcodeStrip() {
  const bars = [
    { x: 0, w: 3 },
    { x: 5, w: 1 },
    { x: 8, w: 4 },
    { x: 15, w: 2 },
    { x: 20, w: 1 },
    { x: 23, w: 3 },
    { x: 30, w: 5 },
    { x: 38, w: 1 },
    { x: 42, w: 3 },
    { x: 48, w: 2 },
    { x: 53, w: 4 },
    { x: 60, w: 1 },
    { x: 64, w: 6 },
    { x: 73, w: 2 },
    { x: 78, w: 3 },
    { x: 84, w: 1 },
    { x: 88, w: 4 },
    { x: 95, w: 2 },
    { x: 100, w: 5 },
    { x: 108, w: 2 },
    { x: 113, w: 3 },
    { x: 119, w: 1 },
    { x: 123, w: 4 },
    { x: 130, w: 2 },
    { x: 135, w: 5 },
    { x: 143, w: 1 },
    { x: 147, w: 3 },
    { x: 153, w: 4 },
    { x: 160, w: 2 },
    { x: 165, w: 1 },
    { x: 169, w: 5 },
    { x: 177, w: 2 },
    { x: 182, w: 3 },
    { x: 188, w: 4 },
    { x: 195, w: 2 },
  ];

  return (
    <div className="mt-4 bg-white/95 p-2.5 rounded border border-espresso/20 shadow-xs flex flex-col items-center w-full">
      <svg
        aria-hidden="true"
        className="w-full h-9"
        fill="#361E18"
        viewBox="0 0 200 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        {bars.map((bar) => (
          <rect key={bar.x} height="40" width={bar.w} x={bar.x} y="0" />
        ))}
      </svg>
      <div className="flex justify-between w-full font-mono text-[9px] text-espresso/70 tracking-widest mt-1 tabular-nums">
        <span>ID-2024-SOPI</span>
        <span>ITPLN • JKT</span>
        <span>0882-8954</span>
      </div>
    </div>
  );
}
