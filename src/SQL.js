
const sql=require('mysql')



const connection=sql.createConnection({
    host:"bb09tmo9ia7rkvjlgitr-mysql.services.clever-cloud.com",
    user:"umd4rw6itdnna500",
    password:'6yxOZUboNV7Y00AWbf7x',
    database:"bb09tmo9ia7rkvjlgitr"
});


module.exports=connection