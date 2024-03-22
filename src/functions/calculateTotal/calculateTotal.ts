export interface IBillParams {
  subTotal: number;
  taxRate: number;
  discountPercentage: number;
}
export function calculateTotal(props: IBillParams) {
  const { subTotal, taxRate, discountPercentage } = props;

  return (subTotal ?? 0) * (1 - (discountPercentage ?? 0)) * (1 + (taxRate ?? 0));
}
