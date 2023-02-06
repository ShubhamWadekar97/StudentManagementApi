require('dotenv').config();

const express= require('express');
const app = express();
app.set('view engine','ejs');
const bodyParser = require('body-parser');


const studentR=require('./routes/studentRoute');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/students',studentR);



app.listen(process.env.PORT ,()=>{
    console.log("Running");
})