const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand
} = require("@aws-sdk/client-s3");

const s3Config = {
  region: "us-east-2",
  credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_ACCESS_SECRET
  }
};

const s3Client = new S3Client(s3Config);
 
 exports.pushToS3 = async(post) => {
  const photos = post.photos;
  const postId = post.id;
  
  for (let i = 0; i < photos.length; i++) {
    const bucketParams = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: postId.toString(),
      Body: photos[i].toString()
    };
    try {
      await s3Client.send(new PutObjectCommand(bucketParams));
    } catch (err) {
      console.log("Error", err);
    }
  }
}

exports.pullFromS3 = async(getObjectCommand) => {
  try {
    const response = await s3Client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    console.log(str);
    return str
  } catch (err) {
    console.error(err);
  }
}