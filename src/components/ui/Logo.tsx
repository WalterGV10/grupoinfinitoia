import React from "react";

const Logo = ({ className = "w-8 h-8", ...props }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF" />
        <stop offset="100%" stopColor="#7000FF" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    
    {/* Infinite Loops */}
    <path
      d="M30 50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50C70 61.0457 61.0457 70 50 70C38.9543 70 30 61.0457 30 50Z"
      stroke="url(#logo-grad)"
      strokeWidth="4"
      strokeLinecap="round"
      className="animate-pulse"
    />
    <path
      d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50C80 66.5685 66.5685 80 50 80C33.4315 80 20 66.5685 20 50Z"
      stroke="url(#logo-grad)"
      strokeWidth="2"
      strokeDasharray="4 8"
      opacity="0.5"
    />
    
    {/* Center Dot */}
    <circle cx="50" cy="50" r="4" fill="#00F0FF" filter="url(#glow)" />
    
    {/* Orbiting element */}
    <circle cx="50" cy="20" r="3" fill="#00F0FF">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default Logo;
