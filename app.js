const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
});