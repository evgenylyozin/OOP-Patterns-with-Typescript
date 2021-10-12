/*
  Object adapter pattern
*/

/*
  Адаптер для объектов
*/

class Adaptee {
  incompatibleAbstractOperation = () => 455
}

abstract class AbstractTarget {
  abstract abstractOperation(): number
}

class ConcreteOperationOne extends AbstractTarget {
  abstractOperation = () => 123
}

class ConcreteOperationTwo extends AbstractTarget {
  abstractOperation = () => 321
}

class ConcreteOperationAdapter implements AbstractTarget  {
  abstractOperation = () => {
    const anAdaptee = new Adaptee()
    return anAdaptee.incompatibleAbstractOperation()
  }
}

const op1 = new ConcreteOperationOne()
const op2 = new ConcreteOperationTwo()
const op3 = new ConcreteOperationAdapter()

console.log(op1.abstractOperation()) // 123
console.log(op2.abstractOperation()) // 321
console.log(op3.abstractOperation()) // 455

export default null