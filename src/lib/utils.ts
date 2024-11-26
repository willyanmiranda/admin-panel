import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertDate(date: string) {
  const newDate = new Date(date);

  const day = String(newDate.getUTCDate()).padStart(2, '0');
  const month = String(newDate.getUTCMonth() + 1).padStart(2, '0'); 
  const year = newDate.getUTCFullYear();

  return `${day}/${month}/${year}`
}