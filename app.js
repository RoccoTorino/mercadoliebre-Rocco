const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3000, () => {
    console.log("levantando un servidor en express en ", "http://localhost:3000");
})

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
});