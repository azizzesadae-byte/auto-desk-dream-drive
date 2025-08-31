export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-glow" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">Auto-Desk</h3>
        <p className="text-xs text-muted-foreground">Premium Import</p>
      </div>
    </div>
  );
}