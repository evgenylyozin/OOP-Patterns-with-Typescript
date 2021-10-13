/*
  Decorator pattern
*/
/*
  Декоратор
*/

abstract class Component {
  abstract Operation(): number
}

class ConcreteComponent extends Component {
  Operation = () => 5
}

class Decorator extends Component {
  constructor(component: any){
    super()
    this.decoratedComponent = component
  }
  Operation = () => this.decoratedComponent.Operation()
  decoratedComponent
}

class ConcreteDecoratorA extends Decorator {
  DecoratedOperation = (): number => this.decoratedComponent.DecoratedOperation ? this.decoratedComponent.DecoratedOperation() + 10 : this.Operation() + 10
}

class ConcreteDecoratorB extends Decorator {
  DecoratedOperation = (): number => this.decoratedComponent.DecoratedOperation ? this.decoratedComponent.DecoratedOperation() + 20 : this.Operation() + 20
}

const aComponent = new ConcreteComponent()
const aDecoratedComponentA = new ConcreteDecoratorA(aComponent)
const aDecoratedComponentB = new ConcreteDecoratorB(aComponent)
console.log(aDecoratedComponentA.DecoratedOperation()) // 15
console.log(aDecoratedComponentB.DecoratedOperation()) // 25

const aDecoratedComponentInDecoratorB = new ConcreteDecoratorB(new ConcreteDecoratorA(new ConcreteComponent()))

console.log(aDecoratedComponentInDecoratorB.DecoratedOperation()) // 35

const wrapWrap = new ConcreteDecoratorB(new ConcreteDecoratorB(new ConcreteDecoratorA(new ConcreteComponent())))

console.log(wrapWrap.DecoratedOperation()) // 55

export default null