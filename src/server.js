const express=require('express');//import express
const bodyParser=require('body-parser');//import body parser
const app=express();//with use express function we created a app instance

//express has a concept of middleware
app.use(bodyParser.json());//in that case we can use (req.body); 
 const hotels=[{
    name:"vaibhav",
    price:1000,
    id:"1"
},
{
    
        name:"rao",
        price:2000,
        id:"2"
    
}];

app.get("/api/hotel",(req,res)=>{

    return res.send(hotels);//return all hotels data
})

app.get("/api/hotel/:hotelId",(req,res)=>{

    const { hotelId } = req.params;
    const hotel=hotels.find(el => el.id===hotelId);
    if(hotel)
   {
    return res.send(hotel);//return all hotels data
   }
   else
   {
    return res.status(404).send({error:"hotel not found.plz try with valid hotelid.."})
   }


});

app.delete('/api/hotel/:hotelId',(req,res)=>{
    const { hotelId } = req.params;
    const hotelIndex=hotels.findIndex((hotel) =>hotel.id ===hotelId);
if(hotelIndex===-1)   
{
    return res.status(404).send({error:"hotel not found.plz try with valid hotelid...."})
    
}
hotels.splice(hotelIndex,1)
return res.status(200).send({msg:"hotel removed succssfully"});
  
})

app.put("/api/hotel/:hotelId",(req,res)=>{
    const { hotelId } = req.params;
    const hotelIndex=hotels.findIndex((hotel) =>hotel.id ===hotelId);
if(hotelIndex===-1)   
{
    return res.status(404).send({error:"hotel not found.plz try with valid hotelid...."})
    
}
hotels[hotelIndex]={
  name: hotel.name,
  price:hotel.price,
  id:hotelId,    
};
return res.status(200).send(hotels[hotelIndex]);
  
});


app.post('/api/hotel',(req,res)=>{
    const hotel=req.body;
    hotels.push(hotel);
   return res.status(201).send({"msg":"sucess hotel has benn createdd"});
})


app.listen(8000,()=>{  //server has started on 8000
    console.log("server has been started on 8000");
})
