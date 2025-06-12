"use client";

import { useCallback } from "react";

export function Pokeball() {
  const handleClick = useCallback(async () => {
    try {
      const module = await import("https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.mjs");
      const confetti = module.default;
      confetti({
        particleCount: 80,
        spread: 120,
        startVelocity: 30,
        origin: { y: 0.6 },
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <button
      aria-label="Pokeball"
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-black shadow-lg animate-float"
    >
      <div className="absolute inset-0 top-0 h-1/2 bg-red-600" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-black" />
      <div className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-white">
        <div className="h-2 w-2 rounded-full bg-black" />
      </div>
    </button>
  );
}
