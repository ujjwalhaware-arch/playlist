import PlayerShell from "@/components/PlayerShell";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      {/* 1. Fixed Background with playlist.png */}
      <div className="fixed inset-0 -z-20 hero-bg bg-cover bg-center">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90 pointer-events-none" />
      </div>

      {/* 2. Fixed Grain Overlay */}
      <div className="fixed inset-0 -z-10 grain-overlay opacity-[0.2] mix-blend-overlay pointer-events-none" />

      {/* Ambient header branding */}
      <div className="w-full flex flex-col items-center justify-center mt-[max(4.75rem,env(safe-area-inset-top))] px-6 text-center select-none z-10 shrink-0 pointer-events-none">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white/95 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] font-display uppercase">
          My Playlist
        </h1>
        <p className="mt-1.5 text-[10.5px] sm:text-xs font-bold tracking-[0.28em] text-accent uppercase font-mono drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Mood Radio & Nostalgia Vault
        </p>
      </div>

      {/* 3. The Client Player Component */}
      <PlayerShell />
    </main>
  );
}
