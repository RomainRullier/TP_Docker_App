const express = require('express')
const app = express()
const port = 8085

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
