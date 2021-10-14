/*
  Chain of responsibility pattern
*/

/*
  Цепь обязанностей
*/

abstract class Handler {
  abstract HandleRequest(request: any): void
  static HandleRequest = () => console.log("Запрос не обработан")
}

class Handler1 extends Handler {
  HandleRequest = (request: any) => request === 1 ? console.log('Запрос обработан Хендлером номер 1') : Handler.HandleRequest()
}

class Handler2 extends Handler1 {
  HandleRequest = (request: any) => request === 2 ? console.log('Запрос обработан Хендлером номер 2') : new Handler1().HandleRequest(request)
}

class Handler3 extends Handler2 {
  HandleRequest = (request: any) => request === 3 ? console.log('Запрос обработан Хендлером номер 3') : new Handler2().HandleRequest(request)
}

class Handler4 extends Handler3 {
  HandleRequest = (request: any) => request === 4 ? console.log('Запрос обработан Хендлером номер 4') : new Handler3().HandleRequest(request)
}

const RequestHandler = new Handler4()

RequestHandler.HandleRequest(1) // Запрос обработан Хендлером номер 1
RequestHandler.HandleRequest(2) // Запрос обработан Хендлером номер 2
RequestHandler.HandleRequest(3) // Запрос обработан Хендлером номер 3
RequestHandler.HandleRequest(4) // Запрос обработан Хендлером номер 4
RequestHandler.HandleRequest(5) // Запрос не обработан

export default null