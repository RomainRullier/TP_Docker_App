const express = require('express')
const app = express()
const port = 8085

app.get('/', (req, res) => res.send('Hello Docker'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
