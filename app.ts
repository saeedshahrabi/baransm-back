const express = require('express');
const server = express()
const mongoConnect = require('./utility/dataBase').mongoConnect

server.get('', (req: string, res: any) => {
    res.send('helosssodasdaso')
})

mongoConnect(() => {
    server.listen(1111)
})