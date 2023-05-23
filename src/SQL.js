
const sql=require('mysql')



const connection=sql.createConnection({
    host:"bb09tmo9ia7rkvjlgitr-mysql.services.clever-cloud.com",
    user:"umd4rw6itdnna500",
    password:'umd4rw6itdnna500',
    database:"college"
});


module.exports=connection