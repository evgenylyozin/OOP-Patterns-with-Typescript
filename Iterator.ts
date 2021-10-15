/*
  Iterator pattern
*/

/*
  Итератор 
*/

abstract class Iterator {
  abstract First(): any
  abstract Next(): any
  abstract IsDone(): boolean
  abstract CurrentItem(): any
}

abstract class Aggregate {
  abstract CreateIterator(): Iterator
}

class ConcreteAggregate extends Aggregate {
  constructor(array: any[]){
    super()
    this._array = array.slice()
  }
  private _array: any[] = []
  CreateIterator = () => new ConcreteIterator(this._array)
}

class ConcreteIterator extends Iterator {
  private _aggregate: any[]
  private _index: number
  constructor(aggregate: any){
    super()
    this._aggregate = aggregate
    this._index = 0
  }
  First = () => this._aggregate[0]
  Next = () => {
    if(!this.IsDone()){
      const item =  this._aggregate[this._index]
      this._index += 1
      return item
    } else {
      return undefined
    }
  }
  IsDone = () => this._aggregate.length === this._index + 1
  CurrentItem = () => this._aggregate[this._index]
}

const someAggregate = new ConcreteAggregate([1,2,3,4,5,6])
const someIterator = someAggregate.CreateIterator()

console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())
console.log(someIterator.CurrentItem())
console.log(someIterator.Next())

export default null