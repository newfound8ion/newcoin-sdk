export const getNameForTransaction = (name: string): string =>
  name.toLowerCase().trim();

export const priceForCurrency = (
  price: number,
  currency: string,
  decimals: number
) => {
  return `${price.toFixed(decimals)} ${currency}`;
};
