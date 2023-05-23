
const sql=require('mysql')



const connection=sql.createConnection({
    host:"https://user-uv8m.onrender.com/",
    user:"root",
    password:'',
    database:"college"
});


module.exports=connection