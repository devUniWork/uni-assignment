export const CalculatePercentage = (open, close) => {
  console.log('this is open, this is closed', open, close)
  return ((open - close) / ((open + close) / 2) * 100).toFixed(2)
}
