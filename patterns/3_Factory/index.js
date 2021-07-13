
// Общий интерфейс для дочерних классов
class ParentProduct {
  getName() {
  }
}

//
class ConcreteProductA extends ParentProduct {
  getName() {
    return 'this is product A'
  }
}

class ConcreteProductB extends ParentProduct {
  getName() {
    return 'this is product B'
  }
}
// Фабрика
class Fabric {
  create(type = 'A') {
    switch (type) {
      case 'A':
        return new ConcreteProductA()
      case 'B':
        return new ConcreteProductB()
      default:
        return undefined
    }
  }
}

const creator = new Fabric()

const productA = creator.create('A')
const productB = creator.create('B')