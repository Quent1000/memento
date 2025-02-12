"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  hideControls?: boolean;
  objectFit?: "cover" | "contain";
}

export function VideoPlayer({
  src,
  className,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  poster,
  hideControls = false,
  objectFit = "cover",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      if (loop) {
        video.play();
      }
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    if (autoPlay) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay prevented");
        });
      }
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, [autoPlay, loop]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div
      className={cn("relative group", className)}
      onMouseEnter={() => !hideControls && setShowControls(true)}
      onMouseLeave={() => !hideControls && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className={cn(
          "w-full h-full rounded-lg",
          objectFit === "cover" ? "object-cover" : "object-contain"
        )}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls && !hideControls}
        poster={poster}
        playsInline
      />

      {!hideControls && !controls && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center bg-black/20"
        >
          <button
            onClick={togglePlay}
            className="p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isPlaying ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
              )}
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  );
}
