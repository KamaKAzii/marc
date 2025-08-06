"use client";

import React, { useRef, useEffect, useState } from "react";

interface SquareProps extends React.HTMLAttributes<HTMLDivElement> {
  soundUrl: string;
}

export const Square: React.FC<SquareProps> = ({
  children,
  soundUrl,
  ...props
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      // Set up event listeners for loading
      const audio = audioRef.current;

      const handleCanPlay = () => {
        setIsLoaded(true);
      };

      const handleError = () => {
        console.error("Failed to load audio:", soundUrl);
        setIsLoaded(false);
      };

      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("error", handleError);

      // Trigger load
      audio.load();

      return () => {
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("error", handleError);
      };
    }
  }, [soundUrl]);

  const handleClick = () => {
    if (audioRef.current && isLoaded) {
      audioRef.current.currentTime = 0; // Reset to beginning
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div
      className={`aspect-square flex items-center justify-center border border-gray-800 p-4 rounded-md cursor-pointer transition-colors text-sm text-center ${
        isLoaded ? "hover:bg-gray-900" : "opacity-50 cursor-not-allowed"
      }`}
      onClick={handleClick}
      {...props}
    >
      <audio ref={audioRef} src={soundUrl} preload="auto" />
      {isLoaded ? children : "Loading..."}
    </div>
  );
};
