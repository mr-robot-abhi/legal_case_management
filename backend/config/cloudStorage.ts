import { google } from "googleapis";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const drive = google.drive({ version: "v3", auth: oauth2Client });

export const uploadFileToDrive = async (filePath: string, fileName: string) => {
  const fileMetadata = { name: fileName };
  const media = { mimeType: "application/pdf", body: fs.createReadStream(filePath) };

  const response = await drive.files.create({ requestBody: fileMetadata, media });
  return response.data;
};
