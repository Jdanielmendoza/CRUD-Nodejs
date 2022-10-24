const express  = require('express'); 
const path = require('path');
const morgan = require('morgan'); 
const mysql2 = require('mysql2'); 
const myConnection= require('express-myconnection'); 

const app = express(); 
// importando rutas 
const customerRoutes = require('./routes/customer'); 


// setting 
app.set('port',process.env.PORT || 3000);
//motor de plantilass 
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views'));

// middlewares 
app.use(morgan('dev')); 
app.use(myConnection(mysql2,{
    host:'localhost',
    user:'root',
    password:'123456789',
    port:3306,
    database:'Crud',
    ssl:{
        rejectUnauthorized:false
    }
},'single'));
// es el equivalente a usar body-parser. para almacenar los datos del form por su name
app.use(express.urlencoded({extended:false})); 


// routes 
app.use('/',customerRoutes); 

// static files 
app.use(express.static(path.join(__dirname,'public'))); 



app.listen(app.get('port'), ()=>{
    console.log('Server on port',3000); 
})