import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

interface LottiePreviewProps {
  src: string;
  label: string;
  onStatusChange?: (status: "loading" | "playing" | "error") => void;
}

export function LottiePreview({ src, label, onStatusChange }: LottiePreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"loading" | "playing" | "error">("loading");

  useEffect(() => {
    if (!containerRef.current) return;

    setStatus("loading");
    onStatusChange?.("loading");

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: src,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    const handleLoaded = () => {
      setStatus("playing");
      onStatusChange?.("playing");
    };

    const handleError = () => {
      setStatus("error");
      onStatusChange?.("error");
    };

    animation.addEventListener("DOMLoaded", handleLoaded);
    animation.addEventListener("data_failed", handleError as EventListener);

    return () => {
      animation.removeEventListener("DOMLoaded", handleLoaded);
      animation.removeEventListener("data_failed", handleError as EventListener);
      animation.destroy();
    };
  }, [onStatusChange, src]);

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-white/15 bg-slate-950/70 p-3">
      <div
        aria-label={label}
        className="mx-auto h-72 w-full max-w-[22rem]"
        ref={containerRef}
        role="img"
      />
      <p className="mt-2 text-center text-xs text-slate-400">
        {status === "loading" && "Loading animation..."}
        {status === "playing" && "Autoplay active · Looping"}
        {status === "error" && "Failed to render animation JSON"}
      </p>
    </div>
  );
}
