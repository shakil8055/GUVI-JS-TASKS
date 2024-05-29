class UberPrice {
  constructor(baseFare, costPerKm, costPerMin) {
    this.baseFare = baseFare;
    this.costPerKm = costPerKm;
    this.costPerMin = costPerMin;
  }

  calculatePrice(distance, duration) {
    const totalDistanceCost = distance * this.costPerKm;
    const totalDurationCost = duration * this.costPerMin;
    const totalCost = this.baseFare + totalDistanceCost + totalDurationCost;
    return totalCost;
  }
}

const calculator = new UberPrice(5, 0.5, 0.2);
const distance = 10;
const duration = 20;

const price = calculator.calculatePrice(distance, duration);
console.log("Total Price:", price);
