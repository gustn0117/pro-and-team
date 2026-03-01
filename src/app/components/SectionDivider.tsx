type Variant = "navy-to-cream" | "cream-to-white" | "white-to-cream" | "cream-to-navy";

export default function SectionDivider({ variant }: { variant: Variant }) {
  if (variant === "navy-to-cream") {
    return (
      <div className="relative h-20 md:h-24 -mt-px bg-gradient-to-b from-navy to-cream flex items-center justify-center">
        <div className="legal-divider w-full max-w-xs">
          <span className="text-gold/25 text-sm font-serif">&sect;</span>
        </div>
      </div>
    );
  }

  if (variant === "cream-to-white") {
    return (
      <div className="relative h-16 md:h-20 bg-gradient-to-b from-cream to-white flex items-center justify-center">
        <div className="legal-divider w-full max-w-xs">
          <span className="text-gold/25 text-sm font-serif">&sect;</span>
        </div>
      </div>
    );
  }

  if (variant === "white-to-cream") {
    return (
      <div className="relative h-16 md:h-20 bg-gradient-to-b from-white to-cream flex items-center justify-center">
        <div className="legal-divider w-full max-w-xs">
          <span className="text-gold/25 text-sm font-serif">&sect;</span>
        </div>
      </div>
    );
  }

  // cream-to-navy
  return (
    <div className="relative h-20 md:h-24 -mb-px bg-gradient-to-b from-cream to-navy flex items-center justify-center">
      <div className="legal-divider w-full max-w-xs">
        <span className="text-gold/25 text-sm font-serif">&sect;</span>
      </div>
    </div>
  );
}
