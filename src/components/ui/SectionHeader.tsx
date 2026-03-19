import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Unified Section Header to maintain vertical rhythm and consistent typography.
 */
export default function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-4xl mb-16",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
