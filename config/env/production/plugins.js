module.exports = ({ env }) => ({
  upload: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("AWS_S3__ACCESS_KEY_ID"),
      secretAccessKey: env("AWS_S3__ACCESS_SECRET"),
      region: env("AWS_S3__REGION"),
      params: {
        Bucket: env("AWS_S3__BUCKET"),
      },
    },
  },
});
