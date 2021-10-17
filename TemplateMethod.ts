/*
  Template method pattern
*/
/*
  Шаблонный метод
*/

abstract class Class {
  TemplateMethod = () => this.someOperation1() + this.someOperation2()
  abstract someOperation1(): number
  abstract someOperation2(): number
}

class ConcreteClass1 extends Class {
  someOperation1 = () => 1
  someOperation2 = () => 1
}

class ConcreteClass2 extends Class {
  someOperation1 = () => 2
  someOperation2 = () => 2
}

const aConcreteClass1 = new ConcreteClass1()
const aConcreteClass2 = new ConcreteClass2()

console.log(aConcreteClass1.TemplateMethod())

console.log(aConcreteClass2.TemplateMethod())

export default null