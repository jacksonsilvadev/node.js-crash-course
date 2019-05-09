const EventEmitter = require('events');
// Package que gera um id aleatório
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {
            id: uuid.v4(),
            msg: msg
        })
    }
}

module.exports = Logger;