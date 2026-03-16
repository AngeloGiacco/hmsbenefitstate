/**
 * Format a number with commas: 1234567 → "1,234,567"
 */
export function formatNumber(n: number): string {
  return n.toLocaleString("en-GB");
}

/**
 * Format pounds: 334000000000 → "£334,000,000,000"
 */
export function formatPounds(n: number): string {
  return `£${formatNumber(n)}`;
}

/**
 * Format millions: 347000000 → "£347m"
 */
export function formatMillions(n: number): string {
  return `£${Math.round(n / 1_000_000)}m`;
}

/**
 * Format billions: 334000000000 → "£334bn"
 */
export function formatBillions(n: number): string {
  return `£${(n / 1_000_000_000).toFixed(1)}bn`;
}

/**
 * Slugify: "Hackney South and Shoreditch" → "hackney-south-and-shoreditch"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
