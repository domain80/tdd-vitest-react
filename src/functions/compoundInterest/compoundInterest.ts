export interface IInterestParams {
  principal: number;
  ratePerAnnum: number;
  compoundingFreq: number;
  time: number;
}

export function compoundInterest(props: IInterestParams) {
  const principal = props?.principal ?? 0;
  const ratePerAnnum = props?.ratePerAnnum ?? 0;
  const compoundingFreq = props?.compoundingFreq ?? 0;
  const time = props?.time ?? 0;

  const amount = principal * Math.pow(1 + ratePerAnnum / compoundingFreq, time * compoundingFreq);

  return {
    amount: Number(amount.toFixed(2)),
    interest: Number((amount - principal).toFixed(2)),
  };
}
