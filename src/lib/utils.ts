import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard council-approved utility to merge tailwind classes efficiently,
 * preventing conflicts between base styles and conditional ones.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
