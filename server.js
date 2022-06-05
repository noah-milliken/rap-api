const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors`')

const rappers = {
   '21 savage':{
       'birthName':'Abraham-Joseph' ,
        'birthLocation': 'London, England',
        'age': 29,
    },

    'chance the rapper':{
        "age": 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago'
    },

    'unknown':{
        'birthName':'unknown' ,
        'birthLocation': 'unknown',
        'age': 0,
    },
    }


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(req,res)=>{
  const rapperName = req.params.name.toLocaleLowerCase()
  if(rappers[rapperName]){
    res.json(rappers[rapperName])
  }else{
      res.json(rappers['unknown'])
  }
    
})

app.listen(process.env.PORT ||PORT, ()=>{
    console.log(`The Server is now running on port ${PORT}! Better go catch it!`)
});