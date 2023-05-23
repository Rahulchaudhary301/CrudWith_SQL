const express=require('express')
const app=express()
const Router=express.Router()
const con=require('../SQL')


Router.get('/get',(req,res)=>{
    res.send({msg:"Hii sql"})
})



// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/Register.html')
// })





// con.connect(function(err){
//     if(err) throw err
//     console.log("connect")
// })

// con.query('select * from students',function(error,result){
//     if(error) throw error
//     console.log(result)
// })




module.exports=Router