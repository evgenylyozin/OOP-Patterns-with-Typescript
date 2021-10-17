/*
  Visitor pattern
*/

/*
  Посетитель 
*/

abstract class Visitor {
  abstract VisitA(A: ElementA): void
  abstract VisitB(B: ElementB): void
}

class ConcreteVisitorA extends Visitor {
  VisitA = (A: ElementA) => console.log(A.counter)
  VisitB = (B: ElementB) => undefined
}

class ConcreteVisitorB extends Visitor {
  VisitA = (A: ElementA) => undefined
  VisitB = (B: ElementB) => console.log(B.counter)
}

abstract class Element {
  abstract Accept(Visitor: Visitor): void
}

class ElementA extends Element {
  counter = 1
  Accept = (Visitor: Visitor) => Visitor.VisitA(this)
}

class ElementB extends Element {
  counter = 2
  Accept = (Visitor: Visitor) => Visitor.VisitB(this)
}

const anElementA = new ElementA()
const anElementB = new ElementB()

const aVisitorA = new ConcreteVisitorA()
const aVisitorB = new ConcreteVisitorB()

anElementA.Accept(aVisitorA)
anElementB.Accept(aVisitorB)

export default null