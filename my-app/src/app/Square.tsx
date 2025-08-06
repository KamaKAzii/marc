"use client";

import React, { useRef } from "react";

interface SquareProps extends React.HTMLAttributes<HTMLDivElement> {
  soundUrl: string;
}

export const Square: React.FC<SquareProps> = ({
  children,
  soundUrl,
  ...props
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to beginning
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  return (
    <div
      className="aspect-square flex items-center justify-center border border-gray-800 p-4 rounded-md cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={handleClick}
      {...props}
    >
      <audio ref={audioRef} src={soundUrl} preload="auto" />
      Dersel?
    </div>
  );
};
