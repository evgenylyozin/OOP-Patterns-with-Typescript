/*
  Proxy pattern
*/

/*
  Прокси
*/

abstract class Class {
  abstract get(request?: any): void
}

class ProxiedClass extends Class {
  get = () => console.log('Запрос прошел')
}

class Proxy extends Class {
  private _proxiedObj = new ProxiedClass()
  get = (request: any) => request === 1 ? this._proxiedObj.get() : console.log('Запрос не прошел')
}

const Server = new Proxy()

Server.get(1)
Server.get(2)
Server.get(3)
Server.get(1)

export default null