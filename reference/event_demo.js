const EventEmmiter = require('events');

// Create class (Criando a classe MyEmmitter que pega as propriedades da EventEmitter )
class MyEmitter extends EventEmmiter {}

// Init Object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log(myEmitter));

// Init event
myEmitter.emit('event');