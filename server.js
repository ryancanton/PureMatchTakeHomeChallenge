const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const seeder = require("./seeder.js")


const app = express();

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(fileUpload());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
});

setTimeout(seeder.seedTables, 750);
// routes
require('./app/routes/auth')(app);
require('./app/routes/post')(app);
require('./app/routes/friend')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
