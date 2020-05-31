const path=require('path');
const express=require('express');
const hbs=require('hbs')
console.log(__dirname);
//console.log(__filename);
const app=express()
const publicpath=path.join(__dirname,'../public')
//const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'./partial')
app.set('view engine','hbs')
//app.set('views',viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(publicpath))
app.get('',(req,res)=>
{
	res.send("hello express");
})

app.get('/help',(req,res)=>
{
	res.render('help');
})

//use hbs


app.listen(3000,()=>{
	console.log("server is  on port 3000");
})