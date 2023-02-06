const mysql =require('mysql');

const connection= mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:'cdac',
database:process.env.DATABASE
})
module.exports=connection;