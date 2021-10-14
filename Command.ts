/*
  Command pattern
*/

/*
  Команда
*/

class Receiver {
  log1 = () => console.log('Команда 1 выполнена')
  log2 = () => console.log('Команда 2 выполнена')
}

abstract class Command {
  constructor(receiver: any){
    this.receiver = receiver
  }
  abstract Execute(): void

  protected receiver: any
}

class Invoker {
  storeCommand = (command: Command) => this._command = command
  invoke = () => this._command?.Execute()

  private _command: Command | undefined = undefined
}

class Command1 extends Command {
  Execute = () => this.receiver.log1()
}

class Command2 extends Command {
  Execute = () => this.receiver.log2()
}

const aConcreteCommand1 = new Command1(new Receiver())
const aInvoker1 = new Invoker()

aInvoker1.storeCommand(aConcreteCommand1)

aInvoker1.invoke()

const aConcreteCommand2 = new Command2(new Receiver())
const aInvoker2 = new Invoker()

aInvoker2.storeCommand(aConcreteCommand2)

aInvoker2.invoke()

export default null