
class Request {
  static instance
  constructor(config) {
    if (Request.instance) {
      return Request.instance
    }
    Request.instance = this
    this.config = config
  }
}

const instance1 = new Request({ header: 'header params 1' })
const instance2 = new Request({ header: 'header params 2' })

console.log(instance1, instance2)