import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { OptionState, Variant } from "@/types/product";

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

export const generateVariants = (options: OptionState[], basePrice: number): Variant[] => {
  const cartesian = (arrays: string[][]): string[][] =>
    arrays.reduce(
      (acc, curr) =>
        acc.flatMap((prev) => curr.map((value) => [...prev, value])),
      [[]] as string[][]
    );

  const values = options.map((option) => option.values);

  const combinations = cartesian(values);

  return combinations.map((combination, index) => ({
    id: index + 1, 
    price: basePrice, 
    combination,
    active: true,
  }));
};

export const convertBlobToBase64 = (blobUrl: string) => {
  return new Promise((resolve, reject) => {
    fetch(blobUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      })
      .catch(reject);
  });
}