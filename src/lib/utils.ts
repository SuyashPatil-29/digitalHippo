import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type formatPriceType = {
  options: {
    currency? : "USD" | "EUR" | "GBP" | "JPY" | "CNY" | "RUB" | "INR" | "BRL" | "AUD" | "CAD" | "CHF" | "HKD" | "NZD" | "SEK",
    notation? : Intl.NumberFormatOptions["notation"]
  }
}

export function formatPrice(price: number | string, options: formatPriceType["options"] = {}): string {
  const {currency="INR", notation="compact"} = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price
  
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}