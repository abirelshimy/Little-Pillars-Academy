export default function IslamicDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex items-center gap-2">
        <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold/30" />
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold/40">
          <rect x="3" y="3" width="10" height="10" transform="rotate(45 8 8)" fill="currentColor" />
        </svg>
        <svg width="12" height="12" viewBox="0 0 12 12" className="text-teal/30">
          <rect x="2" y="2" width="8" height="8" transform="rotate(45 6 6)" fill="currentColor" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 16 16" className="text-gold/40">
          <rect x="3" y="3" width="10" height="10" transform="rotate(45 8 8)" fill="currentColor" />
        </svg>
        <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold/30" />
      </div>
    </div>
  );
}
