const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3030

app.listen(PORT, console.log('sv corriendo en el puerto ' + PORT));

app.use(express.static('public'));

app.get("/",(req, res) =>{
    console.log('Entre al home');
    res.sendFile(path.resolve('./views/home.html'));
    
});


app.get("/register",(req, res) =>{
    console.log('Entre al home');
    res.sendFile(path.resolve('./views/register.html'));
    
});

app.get("/login",(req, res) =>{
    console.log('Entre al home');
    res.sendFile(path.resolve('./views/login.html'));
    
});
