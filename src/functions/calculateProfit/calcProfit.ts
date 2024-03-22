export interface IProfitParam {
  unitSellingPrice: number;
  unitCostPrice: number;
  quantitySold: number;
}

export function calculateProfit(params: IProfitParam) {
  const { unitCostPrice, unitSellingPrice, quantitySold } = params;

  return ((unitSellingPrice ?? 0) - (unitCostPrice ?? 0)) * (quantitySold ?? 0);
}
