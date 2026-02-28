type Variant = "navy-to-cream" | "cream-to-white" | "white-to-cream" | "cream-to-navy";

export default function SectionDivider({ variant }: { variant: Variant }) {
  if (variant === "navy-to-cream") {
    return (
      <div className="relative h-24 md:h-32 -mt-px">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-cream" />
        <svg className="absolute bottom-0 w-full h-12 text-cream" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C360,8 1080,8 1440,48 L1440,48 L0,48 Z" fill="currentColor" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 section-divider" />
      </div>
    );
  }

  if (variant === "cream-to-white") {
    return (
      <div className="relative h-16 md:h-20 bg-gradient-to-b from-cream to-white flex items-center justify-center">
        <div className="ornamental-divider w-full max-w-xs">
          <span className="text-gold/20 text-[8px]">&#9670;</span>
        </div>
      </div>
    );
  }

  if (variant === "white-to-cream") {
    return (
      <div className="relative h-16 md:h-20 bg-gradient-to-b from-white to-cream flex items-center justify-center">
        <div className="ornamental-divider w-full max-w-xs">
          <span className="text-gold/20 text-[8px]">&#9670;</span>
        </div>
      </div>
    );
  }

  // cream-to-navy
  return (
    <div className="relative h-24 md:h-32 -mb-px">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-navy" />
      <svg className="absolute top-0 w-full h-12 text-cream" viewBox="0 0 1440 48" preserveAspectRatio="none">
        <path d="M0,0 C360,40 1080,40 1440,0 L1440,0 L0,0 Z" fill="currentColor" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 section-divider" />
    </div>
  );
}
