"use client";

import { useState } from "react";

interface ExpandCardsProps {
  images?: string[];
  defaultExpanded?: number;
  className?: string;
}

const ExpandOnHover: React.FC<ExpandCardsProps> = ({
  images = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop",
  ],
  defaultExpanded = 3,
  className = ""
}) => {
  const [expandedImage, setExpandedImage] = useState(defaultExpanded);

  const getImageWidth = (index: number) =>
    index === expandedImage ? "24rem" : "5rem";

  return (
    <div className={`w-full bg-[#f5f4f3] dark:bg-[#141414] ${className}`}>
      <div className="relative grid min-h-[500px] grid-cols-1 items-center justify-center p-2 transition-all duration-300 ease-in-out lg:flex w-full">
        <div className="w-full h-full overflow-hidden rounded-3xl">
          <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3] dark:bg-[#141414]">
            <div className="relative w-full max-w-6xl px-5">
              <div className="flex w-full items-center justify-center gap-1 overflow-x-auto overflow-y-hidden pb-4">
                {images.map((src, idx) => (
                  <div
                    key={idx}
                    className="relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500 ease-in-out flex-shrink-0"
                    style={{
                      width: getImageWidth(idx + 1),
                      height: "24rem",
                    }}
                    onMouseEnter={() => setExpandedImage(idx + 1)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={src}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandOnHover;

