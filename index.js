const express = require('express');
const app = express();


app.use("*", (req, res, next) => {
  return res.status(404).json("Rute not found")
})

app.listen(3000, () => {
  console.log("servidor desplegado en http://localhost:3000");
})