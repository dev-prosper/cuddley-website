export function formatNumberWithCommas(num: number | null | undefined): string {
  if (num == null || isNaN(num)) return ""; // or return "—" if you prefer a placeholder
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
