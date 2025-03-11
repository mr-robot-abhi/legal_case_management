const { Storage: GoogleCloudStorage } = require("@google-cloud/storage");

const storage = new GoogleCloudStorage();

const uploadFile = async (filePath: string, destination: string): Promise<void> => {
  await storage.bucket(process.env.BUCKET_NAME).upload(filePath, {
    destination,
  });
};

module.exports = { uploadFile };
