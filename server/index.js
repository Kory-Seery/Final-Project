const express = require('express')
const app = express()
const port = 4000

app.get('/test', (req, res) => {
    res.status(200).json({
        status : 200,
        data: "Hello World!"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})