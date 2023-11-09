const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
});

app.get("/", (req, res) => {
  res.json({ message: "json test" });
});

app.listen(port, () => console.log(`app listening on port ${port}`));