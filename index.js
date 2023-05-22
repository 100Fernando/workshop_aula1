const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
const port = 3000

app.get('/', async (req, res) => {

    const connection = await mysql.createConnection({
        host: 'sql9.freemysqlhosting.net',
        user: 'sql9620111',
        password: 'uAaitpTeM3',
        database: 'sql9620111'
    })

    const [rows] = await connection.execute('SELECT * FROM clusters_co')

    connection.end()

    res.send(rows)




})

app.get('/admin', async (req, res) => {
    res.send('Estou na parte do admin')
})


app.listen(port, () => {
    console.log('meu servidor esta na porta 3000')
})
