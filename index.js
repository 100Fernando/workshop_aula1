const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 3000

app.get('/', async (req, res) => {

    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'co',
        password: '123',
        database: 'co'
    })

    const [rows] = await connection.execute('SELECT * FROM clusters')

    connection.end()

    res.send(rows)




})

app.get('/admin', async (req, res) => {
    res.send('Estou na parte do admin')
})


app.listen(port, () => {
    console.log('meu servidor esta na porta 3000')
})
