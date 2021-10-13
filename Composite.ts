/*
  Composite pattern
*/
/*
  Компоновщик
*/

abstract class Component {
  abstract SomeCommonOperation(): any

  protected AddComponent = (component: Component) => 0
  protected RemoveComponent = (index: number) => undefined
  protected GetComponent = (index: number) => undefined
  protected GetAllChildren = (): any[] => []

  protected children: any[] = []
}

class Leaf extends Component {
  SomeCommonOperation = () => 5
}

class Composite extends Component {
  SomeCommonOperation = () => this.children.reduce((prev, next) => {
     if(typeof prev === 'number') {
       return prev + next.SomeCommonOperation()
     } else {
       return prev.SomeCommonOperation() + next.SomeCommonOperation()
     }
  })

  AddComponent = (component: Component) => this.children.push(component)
  RemoveComponent = (index: number) => {
    this.children = this.children.slice(0,index).concat(this.children.slice(index+1))
    return undefined
  }
  GetComponent = (index: number) => this.children[index]
  GetAllChildren = () => this.children
}

// Тесты

const aLeaf1 = new Leaf()
const aLeaf2 = new Leaf()
const aComposite1 = new Composite()
const aComposite2 = new Composite()

aComposite1.AddComponent(aLeaf1)
aComposite1.AddComponent(aLeaf2)

aComposite2.AddComponent(aLeaf1)
aComposite2.AddComponent(aLeaf2)
aComposite2.AddComponent(aComposite1)

console.log(aComposite1.GetAllChildren())
console.log(aComposite2.GetAllChildren())
console.log(aComposite1.SomeCommonOperation()) // 10
console.log(aComposite2.SomeCommonOperation()) // 20

aComposite2.RemoveComponent(2)

console.log(aComposite2.SomeCommonOperation()) // 10
console.log(aComposite2.GetAllChildren())

export default null