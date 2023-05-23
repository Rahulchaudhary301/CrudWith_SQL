const express=require('express')
const app=express()
const route=require('../src/Router/router')
const con=require('../src/SQL')

app.use(express.json())

var bodyParser=require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs')


app.get('/',function(req,res){
    res.sendFile(__dirname+'/Register.html')
})

app.post('/',function(req,res){
    let name=req.body.name
    let email=req.body.email
    let mobile=req.body.mobile
    
   try{
    
        
        var sql="INSERT INTO students(name, email, mobile) VALUES('"+name+"','"+email+"','"+mobile+"')";
        con.query(sql,function(error,result){
            if(error) throw error
            res.redirect('/student')
           // res.send('Studnts Record Succesfully');
        })

   }
   catch(err){
    res.send(err.message)
   }

})



app.get('/student',function(req,res){
   try{
   

        var sql='select * from students'
        con.query(sql,function(error,result){
            if(error) throw error
            res.render(__dirname+"/students",{students:result})
        })
        
    
   }
   catch(err){
    res.send(err.message)
   }
})


app.get('/delete-student',function(req,res){
    try{
    
 
         var sql='delete from students where id=?';
         var id=req.query.id
         con.query(sql,[id],function(error,result){
             if(error) throw error
            res.redirect('/student')
         })
         
     
    }
    catch(err){
     res.send(err.message)
    }
 })



 
app.get('/update-student',function(req,res){
   
    
 
         var sql="select * from students where id=?";
         var id=req.query.id
         con.query(sql,[id],function(error,result){
             if(error) throw error
            res.render(__dirname+"/student_update",{students:result})
         })
         
     
 })

 app.post('/update-student',function(req,res){
    let name=req.body.name;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let id=req.body.id
    var sql="UPDATE students set name=? , email=?, mobile=? where id=?";
    
    con.query(sql,[name, email, mobile, id ],function(error,result){
        if(error) throw error
       res.redirect('/student')
    })
      
 })







app.use('/',route)

app.listen(3000,()=>console.log("expess is running on 3000"))
