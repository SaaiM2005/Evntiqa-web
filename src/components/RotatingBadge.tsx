import React from 'react';

interface RotatingBadgeProps {
  className?: string;
  size?: number;
}

export const RotatingBadge: React.FC<RotatingBadgeProps> = ({
  className = '',
  size = 130,
}) => {
  const text = 'DISCOURSE • GLOBAL • PIPELINE ACCELERATION • ';

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Discourse Global Pipeline Acceleration Badge"
    >
      {/* Rotating SVG Ring */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow origin-center"
        aria-hidden="true"
      >
        <path
          id="badgeCirclePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[7.2px] font-['Montserrat'] font-semibold tracking-[0.16em] uppercase fill-[#3E3C37]">
          <textPath href="#badgeCirclePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Central Star Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-5 h-5 text-[#FF5A1F]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
        </svg>
      </div>
    </div>
  );
};
