export const padReview = (review: number): string => {
  const revString = String(Math.round(review * 10) / 10)
  if (!revString.includes('.')) {
    return revString + '.0';
  }

  return revString;
};
