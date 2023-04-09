const express=require('express');//import express
const bodyParser=require('body-parser');//import body parser
const app=express();//with use express function we created a app instance

//express has a concept of middleware
app.use(bodyParser.json());//in that case we can use (req.body); 
 const hotels=[{
    
        "name":"oberai",
        "id":"1",
        "price":1000
    },
    {
        "name":"norve",
        "id":"2",
        "price":2000
   }
 ]

app.get('/api/hotel',(req,res)=>{

    return res.send(hotels);//return all hotels data
})

app.post('/api/hotel',(req,res)=>{
    const hotel=req.body;
    hotels.push(hotel);
   return res.status(201).send({"msg":"sucess hotel has benn createdd"});
})


app.listen(8000,()=>{  //server has started on 8000
    console.log("server has been started on 8000");
})
