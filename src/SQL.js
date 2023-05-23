
const sql=require('mysql')



const connection=sql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"college"
});


module.exports=connection