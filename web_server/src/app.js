const path=require('path');
const express=require('express');
console.log(__dirname);
//console.log(__filename);
const publicpath=path.join(__dirname,'../public')
const app=express()
app.use(express.static(publicpath))
app.get('',(req,res)=>
{
	res.send("hello express");
})

//use hbs


app.listen(3000,()=>{
	console.log("server is us on posrt 3000");
})