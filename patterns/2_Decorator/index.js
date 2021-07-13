
class Burger {
  constructor(burger, price) {
    this.burger = burger
    this.currentPrice = price
  }

  get price() {
    return `price ${this.currentPrice}`
  }
}

class Decorator {
  constructor(burger) {
    this.burder = burger
  }

  get price() {
    return `get price ${this.burder.currentPrice + 30} with cheese`
  }
}

const burger = new Burger('какой-то вкусный бургер', 100)
const burgerDecorator = new Decorator(burger)

console.log(burger.price)
console.log(burgerDecorator.price)
