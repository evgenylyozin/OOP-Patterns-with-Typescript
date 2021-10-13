/*
  Facade pattern
*/
/*
  Фасад
*/

class SomeClass1 {
  someOperation = () => 1
}
class SomeClass2 {
  someOperation = () => 1
}
class SomeClass3 {
  someOperation = () => 1
}
class SomeClass4 {
  someOperation = () => 1
}
class SomeClass5 {
  someOperation = () => 1
}
class Facade {
  someOperation = () => {
    const obj1 = new SomeClass1()
    const obj2 = new SomeClass2()
    const obj3 = new SomeClass3()
    const obj4 = new SomeClass4()
    const obj5 = new SomeClass5()
    return obj1.someOperation() + obj2.someOperation() + obj3.someOperation() + obj4.someOperation() + obj5.someOperation()
  }
}

// You can instantiate different classes to get the result or use a unified Facade interface

const UnifiedInterface = new Facade()

console.log(UnifiedInterface.someOperation()) // 5

export default null