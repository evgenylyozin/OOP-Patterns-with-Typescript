/*
  Bridge pattern
*/

/*
  Мост
*/

// Abstraction

class Abstraction {
  constructor(implementation: any){
    this._imp = new implementation()
  }
  Operation = () => this._imp?.OperationImp()
  private _imp: any = null
}

class RefinedAbstractionA extends Abstraction {
  CompleteOperation = () => this.Operation() + this.Operation()
}

class RefinedAbstractionB extends Abstraction {
  CompleteOperation = () => this.Operation() * this.Operation()
}

// Implementation

abstract class Implementor {
  abstract OperationImp(): number
}

class ConcreteImplementorA extends Implementor {
  OperationImp = () => 10
}

class ConcreteImplementorB extends Implementor {
  OperationImp = () => 20
}

// Пример

const Calculation1 = new RefinedAbstractionA(ConcreteImplementorA)
const Calculation2 = new RefinedAbstractionB(ConcreteImplementorB)

console.log(Calculation1.CompleteOperation()) // 20
console.log(Calculation2.CompleteOperation()) // 400

export default null