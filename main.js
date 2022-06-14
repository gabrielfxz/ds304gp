const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { json } = require('express/lib/response')

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

const port = process.env.PORT || 3000

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'))

})

// o método post serve para incluir dados no servidor
app.post('/api', (req,res) =>{
    console.log("foi mandado: \n", req.body)
    _key = req.body.key
    _key2 = req.body.key2
    res.status(200).send(
    {   success: 'true',
        message: 'Ok'
    }
    )
})


app.listen(port,() => console.log(`estou escutando na porta ${port}`))
