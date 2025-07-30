const express = require("express");
const UserData = require("./data/users.json");
const CardData = require("./data/cards.json");

const fs = require("fs");
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*const reader = fs.readFile()*/


app.get("/", (req, res) => {
  res.send( {message: "Servidor funcionando"} );
})

app.get("/users", (req, res) => {
  res.json(UserData);
});

app.get("/cards", (req, res) => {
  res.json(CardData);
});

app.get("/users/:id", (req, res) => {
const id = req.params.id;
const card = CardData.find(item => {
return item._id === id
})
if(card)
res.send( {
  card
})
else
})

app.get("/", (req, res) => {
  res.status(404).send({ mensaje: "<h1>Página no encontrada</h1>" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


app.listen(PORT, () => {

  console.log(`App listening at port ${PORT}`);
})

  server.listen(3000);
