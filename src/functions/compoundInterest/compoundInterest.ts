export interface IInterestParams {
  principal: number;
  ratePerAnnum: number;
  compoundingFreq: number;
  time: number;
}

export function getCompoundInterest(props: IInterestParams | undefined) {
  const { principal, ratePerAnnum, compoundingFreq, time } =
    props ?? ({ principal: 0, ratePerAnnum: 0, compoundingFreq: 0, time: 0 } as IInterestParams);

  const amount = principal * Math.pow(1 + ratePerAnnum / compoundingFreq, time * compoundingFreq);

  return {
    amount: Number(amount.toFixed(2)),
    interest: Number((amount - principal).toFixed(2)),
  };
}
