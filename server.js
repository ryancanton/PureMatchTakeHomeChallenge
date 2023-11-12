const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const {
  S3Client,
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const s3Config = {
  region: "us-east-2",
  credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_ACCESS_SECRET
  }
};

const s3Client = new S3Client(s3Config);

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

// routes
require('./app/routes/auth')(app);
require('./app/routes/post')(app);
require('./app/routes/user')(app);
app.post("/upload", async (req, res) => {
  const file = req.body.photo;
  const fileName = req.body.id;
  
  const bucketParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName.toString(),
    Body: file.toString()
  };
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    res.send(data)
  } catch (err) {
    console.log("Error", err);
  }
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
