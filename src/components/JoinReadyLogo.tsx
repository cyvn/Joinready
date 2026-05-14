interface JoinReadyLogoProps {
  size?: number;
  className?: string;
}

export function JoinReadyLogo({ size = 24, className }: JoinReadyLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <clipPath id="jr-shield-clip">
          <path d="M12 2L5 5.5L5 14Q5 20 12 22Q19 20 19 14L19 5.5Z" />
        </clipPath>
      </defs>

      {/* Shield body */}
      <path
        d="M12 2L5 5.5L5 14Q5 20 12 22Q19 20 19 14L19 5.5Z"
        fill="#182210"
        stroke="#5A7030"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Diagonal rank stripes in lower-right — clipped to shield */}
      <g clipPath="url(#jr-shield-clip)">
        <line x1="11" y1="21.5" x2="19" y2="13.5" stroke="#C2B280" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="13.5" y1="22.5" x2="21.5" y2="14.5" stroke="#C2B280" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Check mark — compact internal detail */}
      <path
        d="M9.1 12.5L10.9 14.3L14.8 10.4"
        stroke="#F4F1E8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
