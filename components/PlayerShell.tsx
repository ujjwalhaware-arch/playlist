"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PLAYLISTS, ALL_VAULT_TRACKS, Track, Playlist } from "@/lib/tracks";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

// ----------------------------------------------------
// HELPER FUNCTIONS & CLIENT LOADER
// ----------------------------------------------------

const formatProgressTime = (seconds: number) => {
  if (isNaN(seconds) || seconds === undefined) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

const loadYTAPI = (callback: () => void) => {
  if (typeof window === "undefined") return;

  if (window.YT && window.YT.Player) {
    callback();
    return;
  }

  const prevCallback = window.onYouTubeIframeAPIReady;
  window.onYouTubeIframeAPIReady = () => {
    if (prevCallback) prevCallback();
    callback();
  };

  if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }
};

// ----------------------------------------------------
// SUB-COMPONENTS
// ----------------------------------------------------

const Clock = () => {
  const [time, setTime] = useState<{ hour: string; minute: string } | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now);

      const parts = formatted.split(":");
      if (parts.length === 2) {
        setTime({ hour: parts[0], minute: parts[1] });
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  return (
    <div className="font-mono text-xs sm:text-sm tracking-widest text-white/90 bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center gap-0.5 select-none">
      <span>{time.hour}</span>
      <span className="animate-colon-blink text-accent font-bold">:</span>
      <span>{time.minute}</span>
    </div>
  );
};

const ListenerCount = () => {
  const [count, setCount] = useState(2184);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return Math.max(1500, prev + delta);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[11px] sm:text-xs font-semibold text-white/85 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] flex items-center gap-2 select-none">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </span>
      <span>{count.toLocaleString()} in vibe</span>
    </div>
  );
};

const MoodHeaderPill = ({ currentPlaylist }: { currentPlaylist: Playlist }) => {
  return (
    <div className="hidden sm:flex items-center gap-2 bg-black/55 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none">
      <span className="text-sm">{currentPlaylist.icon}</span>
      <span className="text-xs font-medium text-white/80">{currentPlaylist.name}</span>
      <span className="text-[10px] font-mono text-accent bg-accent/15 px-1.5 py-0.5 rounded-full font-bold">
        {currentPlaylist.tracks.length}
      </span>
    </div>
  );
};

const MoodSelector = ({
  playlists,
  currentPlaylistIndex,
  onSelectPlaylist,
}: {
  playlists: Playlist[];
  currentPlaylistIndex: number;
  onSelectPlaylist: (index: number) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeBtnRef = useRef<HTMLButtonElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 4);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
    }
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, [playlists]);

  // Auto-scroll active button into view
  useEffect(() => {
    if (activeBtnRef.current) {
      activeBtnRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentPlaylistIndex]);

  // Mouse wheel horizontal scroll handler
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY * 1.5,
          behavior: "auto",
        });
        checkScrollability();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const amount = direction === "left" ? -220 : 220;
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
      setTimeout(checkScrollability, 300);
    }
  };

  // Mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
    checkScrollability();
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full flex flex-col gap-1.5 select-none">
      <div className="flex items-center justify-between px-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 font-mono flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
          Select Mood
        </span>
        <span className="text-[10px] text-white/45 font-mono truncate max-w-[200px] sm:max-w-none">
          {playlists[currentPlaylistIndex].tagline}
        </span>
      </div>

      {/* Scrollable Container with Arrows */}
      <div className="relative group w-full flex items-center">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-20 w-6 h-6 rounded-full bg-black/80 hover:bg-accent text-white hover:text-black border border-white/20 flex items-center justify-center shadow-lg transition-all cursor-pointer -translate-x-1"
            title="Scroll Left"
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}

        {/* Scrollable Track */}
        <div
          ref={containerRef}
          onScroll={checkScrollability}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex justify-start gap-2 overflow-x-auto py-1 px-1 max-w-full no-scrollbar scroll-smooth shrink-0 cursor-grab active:cursor-grabbing w-full touch-pan-x"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {playlists.map((playlist, idx) => {
            const isActive = idx === currentPlaylistIndex;
            return (
              <button
                key={playlist.id}
                ref={isActive ? activeBtnRef : null}
                onClick={() => onSelectPlaylist(idx)}
                className={`whitespace-nowrap px-3.5 py-1.5 text-xs rounded-full border transition-all duration-300 font-semibold cursor-pointer flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? "bg-accent/20 border-accent text-accent shadow-[0_0_16px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "bg-black/55 border-white/10 text-white/65 hover:text-white hover:border-white/25 hover:bg-black/75"
                }`}
              >
                <span>{playlist.icon}</span>
                <span>{playlist.name}</span>
                <span
                  className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    isActive ? "bg-accent text-black" : "bg-white/10 text-white/60"
                  }`}
                >
                  {playlist.tracks.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-20 w-6 h-6 rounded-full bg-black/80 hover:bg-accent text-white hover:text-black border border-white/20 flex items-center justify-center shadow-lg transition-all cursor-pointer translate-x-1"
            title="Scroll Right"
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
};

const VinylDisc = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 select-none shadow-[0_8px_32px_rgba(0,0,0,0.75)] border border-white/15 rounded-full bg-black/75 overflow-hidden">
      {/* Vinyl record concentric grooves */}
      <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-10 scale-95" />
      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none z-10 scale-75" />
      <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-10 scale-[0.55]" />
      
      {/* Rotating YouTube frame */}
      <div
        className={`w-full h-full rounded-full overflow-hidden ${
          isPlaying ? "animate-spin-vinyl" : ""
        }`}
        style={{
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        <div id="youtube-iframe-container" className="w-full h-full scale-[1.35] brightness-90 saturate-[1.15]" />
      </div>

      {/* Center spindle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="w-3.5 h-3.5 rounded-full bg-black/90 ring-2 ring-accent/60 shadow-inner" />
      </div>
    </div>
  );
};

const SeekBar = ({
  elapsed,
  duration,
  onSeek,
}: {
  elapsed: number;
  duration: number;
  onSeek: (e: React.PointerEvent<HTMLDivElement>) => void;
}) => {
  const percent = duration > 0 ? (elapsed / duration) * 100 : 0;

  return (
    <div
      onPointerDown={onSeek}
      className="group relative w-full h-6 flex items-center cursor-pointer touch-none select-none"
    >
      {/* Rail */}
      <div className="w-full h-[3px] bg-white/15 rounded-full relative overflow-hidden">
        {/* Glow */}
        <div
          style={{ width: `${percent}%` }}
          className="absolute top-0 left-0 h-full bg-accent rounded-full shadow-[0_0_10px_var(--accent-color)]"
        />
      </div>
      {/* Knob */}
      <div
        style={{ left: `calc(${percent}% - 5px)` }}
        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-150 shadow-[0_0_8px_var(--accent-color)] pointer-events-none"
      />
    </div>
  );
};

interface TransportProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenDrawer: () => void;
  isShuffle: boolean;
  onToggleShuffle: () => void;
}

const Transport = ({
  isPlaying,
  onTogglePlay,
  onPrev,
  onNext,
  onOpenDrawer,
  isShuffle,
  onToggleShuffle,
}: TransportProps) => {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      {/* Shuffle Button */}
      <button
        onClick={onToggleShuffle}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
          isShuffle ? "text-accent bg-accent/20" : "text-white/50 hover:text-white hover:bg-white/10"
        }`}
        title={isShuffle ? "Shuffle On" : "Shuffle Off"}
        aria-label="Shuffle"
      >
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 active:scale-90 transition-all duration-200 cursor-pointer"
        aria-label="Previous track"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
        </svg>
      </button>

      {/* Play/Pause */}
      <button
        onClick={onTogglePlay}
        className="w-10.5 h-10.5 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-90 transition-all duration-200 shadow-xl cursor-pointer"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white/75 hover:text-white hover:bg-white/10 active:scale-90 transition-all duration-200 cursor-pointer"
        aria-label="Next track"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>

      {/* Tracklist Drawer Toggle */}
      <button
        onClick={onOpenDrawer}
        className="w-8.5 h-8.5 rounded-full flex items-center justify-center text-white/70 hover:text-accent hover:bg-white/10 active:scale-90 transition-all duration-200 cursor-pointer"
        title="View All Songs in Playlist"
        aria-label="Song List"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </button>
    </div>
  );
};

// ----------------------------------------------------
// TRACKLIST DRAWER MODAL
// ----------------------------------------------------
interface TrackDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  playlist: Playlist;
  currentTrack: Track;
  isPlaying: boolean;
  onSelectTrack: (track: Track) => void;
}

const TrackDrawer = ({
  isOpen,
  onClose,
  playlist,
  currentTrack,
  isPlaying,
  onSelectTrack,
}: TrackDrawerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewScope, setViewScope] = useState<"current" | "all">("current");

  const sourceTracks = useMemo(() => {
    return viewScope === "all" ? ALL_VAULT_TRACKS : playlist.tracks;
  }, [viewScope, playlist.tracks]);

  const filteredTracks = useMemo(() => {
    if (!searchQuery.trim()) return sourceTracks;
    const query = searchQuery.toLowerCase();
    return ALL_VAULT_TRACKS.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.artist.toLowerCase().includes(query) ||
        (t.film && t.film.toLowerCase().includes(query)) ||
        t.mood.toLowerCase().includes(query)
    );
  }, [sourceTracks, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full sm:max-w-2xl max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-t-[32px] sm:rounded-[32px] border border-white/15 bg-gradient-to-b from-neutral-900/95 via-black/95 to-black/95 backdrop-blur-3xl shadow-[0_24px_64px_rgba(0,0,0,0.95)] overflow-hidden">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex flex-col gap-3 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">{playlist.icon}</span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                  <span>{playlist.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent font-mono">
                    {playlist.tracks.length} songs
                  </span>
                </h3>
                <p className="text-xs text-white/55">
                  {playlist.tagline}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Scope Toggle & Search */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewScope("current")}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                viewScope === "current" && !searchQuery
                  ? "bg-accent text-black font-semibold"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              This Mood ({playlist.tracks.length})
            </button>
            <button
              onClick={() => setViewScope("all")}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                viewScope === "all" || searchQuery
                  ? "bg-accent text-black font-semibold"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              All Vault ({ALL_VAULT_TRACKS.length})
            </button>
          </div>

          {/* Search bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search song, artist, movie or mood across all songs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white bg-white/10 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Tracks List */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1">
          {filteredTracks.length === 0 ? (
            <div className="text-center py-12 text-white/40 text-xs sm:text-sm">
              No songs found matching "{searchQuery}"
            </div>
          ) : (
            filteredTracks.map((track, idx) => {
              const isCurrent = currentTrack.id === track.id;

              return (
                <button
                  key={track.id}
                  onClick={() => {
                    onSelectTrack(track);
                    onClose();
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2.5 rounded-2xl flex items-center justify-between gap-3 transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? "bg-accent/15 border border-accent/40 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]"
                      : "hover:bg-white/5 border border-transparent text-white/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-xs font-mono font-bold text-white/50 shrink-0">
                      {isCurrent ? (
                        <span className="text-accent animate-pulse">▶</span>
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={`text-xs sm:text-sm font-semibold truncate ${isCurrent ? "text-accent" : "text-white"}`}>
                        {track.title}
                      </span>
                      <span className="text-[11px] text-white/60 truncate">
                        {track.artist} {track.film ? `• ${track.film}` : ""}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[9.5px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 font-mono">
                      {track.mood}
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      {track.duration}
                    </span>
                  </div>
                </button>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

// ----------------------------------------------------
// THE MASTER CLIENT ORCHESTRATOR
// ----------------------------------------------------

export default function PlayerShell() {
  const [mounted, setMounted] = useState(false);

  // Music state
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerReady, setPlayerReady] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const playerRef = useRef<any>(null);

  // Active playlist and track
  const currentPlaylist = PLAYLISTS[currentPlaylistIndex] || PLAYLISTS[0];
  const currentTrack = currentPlaylist.tracks[currentTrackIndex] || currentPlaylist.tracks[0];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handler state refs
  const nextTrackRef = useRef<() => void>(() => {});
  const lastErrorTimeRef = useRef<number>(0);
  const consecutiveErrorCountRef = useRef<number>(0);
  const lastPlayAtRef = useRef<number>(0);

  const currentTrackRef = useRef<Track>(currentTrack);
  currentTrackRef.current = currentTrack;

  const isPlayingRef = useRef<boolean>(isPlaying);
  isPlayingRef.current = isPlaying;

  const isShuffleRef = useRef<boolean>(isShuffle);
  isShuffleRef.current = isShuffle;

  const handleNext = () => {
    const len = currentPlaylist.tracks.length;
    if (isShuffleRef.current && len > 1) {
      let nextIdx = Math.floor(Math.random() * len);
      if (nextIdx === currentTrackIndex) {
        nextIdx = (nextIdx + 1) % len;
      }
      setCurrentTrackIndex(nextIdx);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % len);
    }
    setElapsed(0);
  };

  const handlePrev = () => {
    const len = currentPlaylist.tracks.length;
    setCurrentTrackIndex((prev) => (prev - 1 + len) % len);
    setElapsed(0);
  };

  const handleTogglePlay = () => {
    if (!playerRef.current || !playerReady) return;
    if (isPlaying) {
      try {
        playerRef.current.pauseVideo();
      } catch (e) {}
      setIsPlaying(false);
    } else {
      try {
        if (playerRef.current.unMute) playerRef.current.unMute();
        if (playerRef.current.setVolume) playerRef.current.setVolume(90);
        playerRef.current.playVideo();
      } catch (e) {}
      setIsPlaying(true);
    }
  };

  nextTrackRef.current = handleNext;

    // Safe Error Handler with fallback and loop protection
    const handlePlayerError = (code: number, videoId: string) => {
      console.warn(`YouTube Player reported code ${code} for video ${videoId}`);
      const now = Date.now();
      
      // Check if error is happening too fast (runaway loop protection)
      if (now - lastErrorTimeRef.current < 3000) {
        consecutiveErrorCountRef.current += 1;
      } else {
        consecutiveErrorCountRef.current = 1;
      }
      lastErrorTimeRef.current = now;

      // Try fallback video ID if provided and not already tried
      const track = currentTrackRef.current;
      if (track && track.fallbackVideoIds && track.fallbackVideoIds.length > 0) {
        const fbId = track.fallbackVideoIds[0];
        if (videoId !== fbId) {
          try {
            if (playerRef.current && playerRef.current.loadVideoById) {
              playerRef.current.loadVideoById({ videoId: fbId, startSeconds: 0 });
              return;
            }
          } catch (e) {}
        }
      }

      // If more than 3 errors in rapid succession, pause and halt skip loop
      if (consecutiveErrorCountRef.current >= 3) {
        console.warn("Multiple playback errors detected. Halting auto-skip.");
        setIsPlaying(false);
        return;
      }

      // Advance to next track safely once after delay
      setTimeout(() => {
        if (isPlayingRef.current && consecutiveErrorCountRef.current < 3) {
          nextTrackRef.current();
        }
      }, 1500);
    };

    // Effect 1: YouTube script loader and Player initialization
    useEffect(() => {
      if (!mounted) return;

      let isSubscribed = true;

      const initPlayer = () => {
        if (!isSubscribed || !window.YT || !window.YT.Player) return;

        const container = document.getElementById("youtube-iframe-container");
        if (!container) {
          setTimeout(() => {
            if (isSubscribed) initPlayer();
          }, 150);
          return;
        }

        if (playerRef.current) return;

        try {
          playerRef.current = new window.YT.Player("youtube-iframe-container", {
            height: "100%",
            width: "100%",
            videoId: currentTrackRef.current.videoId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              rel: 0,
              playsinline: 1,
              modestbranding: 1,
              iv_load_policy: 3,
              enablejsapi: 1,
            },
            events: {
              onReady: (event: any) => {
                if (!isSubscribed) return;
                setPlayerReady(true);
                try {
                  if (event.target.unMute) event.target.unMute();
                  if (event.target.setVolume) event.target.setVolume(90);
                  const dur = event.target.getDuration();
                  if (dur) setDuration(dur);
                  if (isPlayingRef.current) {
                    event.target.playVideo();
                  }
                } catch (e) {}
              },
              onStateChange: (event: any) => {
                if (!isSubscribed) return;
                const state = event.data;
                if (state === 1) {
                  // PLAYING
                  setIsPlaying(true);
                  consecutiveErrorCountRef.current = 0;
                  lastPlayAtRef.current = Date.now();
                  const dur = event.target.getDuration();
                  if (dur) setDuration(dur);
                } else if (state === 2) {
                  // PAUSED
                  setIsPlaying(false);
                } else if (state === 0) {
                  // ENDED: Only advance if the song actually played and wasn't a transition glitch
                  if (lastPlayAtRef.current > 0) {
                    const timeSincePlay = Date.now() - lastPlayAtRef.current;
                    if (timeSincePlay > 5000) {
                      lastPlayAtRef.current = 0;
                      nextTrackRef.current();
                    }
                  }
                }
              },
              onError: (event: any) => {
                if (!isSubscribed) return;
                handlePlayerError(event.data, currentTrackRef.current.videoId);
              },
            },
          });
        } catch (err) {
          console.error("Error creating YT.Player:", err);
        }
      };

      loadYTAPI(initPlayer);

      return () => {
        isSubscribed = false;
        if (playerRef.current && playerRef.current.destroy) {
          try {
            playerRef.current.destroy();
          } catch (e) {}
          playerRef.current = null;
          setPlayerReady(false);
        }
      };
    }, [mounted]);

    // Effect 2: Smooth track video switching
    useEffect(() => {
      if (playerReady && playerRef.current && currentTrack) {
        lastPlayAtRef.current = 0;
        setElapsed(0);

        try {
          if (isPlaying) {
            if (playerRef.current.loadVideoById) {
              playerRef.current.loadVideoById({
                videoId: currentTrack.videoId,
                startSeconds: 0,
              });
            }
          } else {
            if (playerRef.current.cueVideoById) {
              playerRef.current.cueVideoById({
                videoId: currentTrack.videoId,
                startSeconds: 0,
              });
            }
          }
        } catch (e) {
          console.warn("Track load exception:", e);
        }
      }
    }, [currentTrack?.id, currentTrack?.videoId, playerReady]);

  // Effect 3: Timed progress tracker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && playerReady && playerRef.current) {
      interval = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          try {
            const time = playerRef.current.getCurrentTime();
            setElapsed(time);
          } catch (e) {}
        }
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playerReady]);

  // Seek bar handler
  const handleSeek = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!playerRef.current || !playerReady || duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    
    const getTargetTime = (clientX: number) => {
      const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const ratio = clickX / rect.width;
      return ratio * duration;
    };

    const initialTime = getTargetTime(e.clientX);
    setElapsed(initialTime);
    playerRef.current.seekTo(initialTime, true);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const nextTime = getTargetTime(moveEvent.clientX);
      setElapsed(nextTime);
      playerRef.current.seekTo(nextTime, false);
    };

    const handlePointerUp = (upEvent: PointerEvent) => {
      const finalTime = getTargetTime(upEvent.clientX);
      setElapsed(finalTime);
      playerRef.current.seekTo(finalTime, true);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
  };

  const handleSelectPlaylist = (idx: number) => {
    setCurrentPlaylistIndex(idx);
    setCurrentTrackIndex(0);
    setElapsed(0);
    setDuration(0);
    setIsPlaying(true);
  };

  const handleSelectSpecificTrack = (track: Track) => {
    const indexInCurrent = currentPlaylist.tracks.findIndex((t) => t.id === track.id);
    if (indexInCurrent !== -1) {
      setCurrentTrackIndex(indexInCurrent);
    } else {
      const targetPlIndex = PLAYLISTS.findIndex((pl) =>
        pl.tracks.some((t) => t.id === track.id)
      );
      if (targetPlIndex !== -1) {
        setCurrentPlaylistIndex(targetPlIndex);
        const idx = PLAYLISTS[targetPlIndex].tracks.findIndex((t) => t.id === track.id);
        setCurrentTrackIndex(idx !== -1 ? idx : 0);
      } else {
        setCurrentPlaylistIndex(0);
        const idx = PLAYLISTS[0].tracks.findIndex((t) => t.id === track.id);
        setCurrentTrackIndex(idx !== -1 ? idx : 0);
      }
    }
    setElapsed(0);
    setDuration(0);
    setIsPlaying(true);
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 w-full max-w-xl px-4 sm:px-0 z-40 select-none">
        <div className="w-full h-24 rounded-[28px] border border-white/5 bg-white/5 backdrop-blur-md animate-pulse" />
      </div>
    );
  }

  return (
    <>
      {/* ----------------- FIXED CORNERS ----------------- */}
      {/* Top Left: Clock */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-[max(1rem,env(safe-area-inset-left))] z-30">
        <Clock />
      </div>

      {/* Top Centre: Live listeners */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] left-1/2 -translate-x-1/2 z-30">
        <ListenerCount />
      </div>

      {/* Top Right: Active mood pill */}
      <div className="fixed top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-30">
        <MoodHeaderPill currentPlaylist={currentPlaylist} />
      </div>

      {/* ----------------- BOTTOM CONTROLS AREA ----------------- */}
      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-40 w-full max-w-xl px-3 sm:px-0 flex flex-col gap-2.5">
        
        {/* Mood selection pills */}
        <MoodSelector
          playlists={PLAYLISTS}
          currentPlaylistIndex={currentPlaylistIndex}
          onSelectPlaylist={handleSelectPlaylist}
        />

        {/* Responsive Glass Player */}
        <div className="w-full rounded-[28px] sm:rounded-full border border-white/15 bg-gradient-to-b from-black/85 via-black/75 to-black/90 backdrop-blur-3xl backdrop-saturate-[1.8] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.15)] p-3 sm:p-3 sm:pr-5 glass-glow transition-all duration-300">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
            
            {/* Top row: Vinyl Disc & Track Info */}
            <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
              <VinylDisc isPlaying={isPlaying} />

              <div className="flex-1 flex flex-col justify-center min-w-0 pr-1 select-none">
                <div className="flex items-baseline justify-between gap-2 sm:gap-3 mb-0.5">
                  <div className="flex flex-col min-w-0">
                    <h2 className="text-sm sm:text-[14.5px] font-semibold text-white truncate tracking-wide font-display flex items-center gap-1.5">
                      <span>{currentTrack.title}</span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-accent/20 text-accent font-mono font-normal">
                        {currentTrack.mood}
                      </span>
                    </h2>
                    <span className="text-xs sm:text-[12px] text-white/70 truncate">
                      {currentTrack.artist} {currentTrack.film ? `(${currentTrack.film})` : ""}
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] font-mono text-white/55 tracking-wider tabular-nums font-semibold shrink-0">
                    {formatProgressTime(elapsed)} / {formatProgressTime(duration)}
                  </div>
                </div>

                <SeekBar elapsed={elapsed} duration={duration} onSeek={handleSeek} />
              </div>
            </div>

            {/* Controls: centered on mobile, right-aligned on desktop */}
            <div className="flex justify-center sm:justify-end shrink-0 sm:pl-1">
              <Transport
                isPlaying={isPlaying}
                onTogglePlay={handleTogglePlay}
                onPrev={handlePrev}
                onNext={handleNext}
                onOpenDrawer={() => setIsDrawerOpen(true)}
                isShuffle={isShuffle}
                onToggleShuffle={() => setIsShuffle((prev) => !prev)}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ----------------- TRACKLIST DRAWER MODAL ----------------- */}
      <TrackDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        playlist={currentPlaylist}
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onSelectTrack={handleSelectSpecificTrack}
      />
    </>
  );
}
