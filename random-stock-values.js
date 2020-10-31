class RandomStockValues {
  constructor() {}
  getAppleStockValues() {
    const startValue = 230;
    const endValue = 350;
    return Math.floor(Math.random() * (startValue - endValue) + 1) + endValue;
  }
}
module.exports = new RandomStockValues();
