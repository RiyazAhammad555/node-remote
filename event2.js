const eventEmitter = require('events')
const customevent = new eventEmitter()
customevent.on('click', (name, id) => {
    console.log(`event has been triggered with the name ${name} having id ${id}`)
})
customevent.on('click', () => {
    console.log('twice triggered')
})
customevent.emit('click', 'Riyaz', 140950)
