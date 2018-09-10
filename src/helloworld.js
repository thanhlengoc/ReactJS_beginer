const express = require('express')
const app = express()

var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.post('/', (req, res) => {
    if(req.body.username=="xxx" && req.body.password=="cccc")
        res.send("login success!");
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))