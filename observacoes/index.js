const express = require('express')
const bodyParser = require('body-parser')
const {v4: uuidv4} = require ('uuid')

const app = express()
app.use(bodyParser.json())

const observacoesPorLembreteId = {}

app.post('/lembretes/:id/observacoes',(req,res)=>{
    const idObs = uuidv4()
    const {texto} = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({id: idObs,texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

app.get('/lembretes/:id/observacoes',(req,res)=>{

})

app.listen(5000,() =>{
    console.log("Serviço de observações, porta 5000")
})