const express = require("express");
const cors = require("cors");
const {engine} = require('express-handlebars')
const axios = require('axios')
const app = express();

app.use(cors());
app.use(express.json());

app.engine('.hbs',engine({
    extname:'.hbs',
    defaultLayout:false,
    layoutsDir:'views'
}))

app.set('view engine','hbs')

app.get("/message", async (req, res) => {
    
  //Recebendo dados da API e armazenando na variavel data
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")

  //Transformando a API em string e inserindo na variavel users
    const users = JSON.parse(JSON.stringify(data));
  //Colocando a string em ordem alfabetica e armazendando na variavel order  
    const order = users.sort((a, b) => a.name.localeCompare(b.name)); 
  //Criando uma string vazia para receber apenas 5 usuarios  
    var orderX = [];
  //Colocando a lista em ordem alfabetica e armazendo os 5 primeros usuarios em uma nova array orderX
    for(var i = 0; i < 5;i++){
       orderX.push(order[i]);
    };
  //Variavel list que vai ser usada no Front-end recebendo a array em ordem alfabetica filtrada com 5 usuarios apenas  
  res.json({ list:orderX });
 

});
//Porta no qual vai rodar o backend
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});