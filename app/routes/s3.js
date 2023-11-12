app.post("/upload", async (req, res) => {
  const file = req.files.file;
  const fileName = req.files.file.name;
  
  const bucketParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: file.data,
  };
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
    res.send(data)
  } catch (err) {
    console.log("Error", err);
  }
});