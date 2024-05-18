const express =require('express')
const app =express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({message : 'test-render'});
})

const port = 3000 || 4000

app.listen(port,()=>{
    console.log('res');
})