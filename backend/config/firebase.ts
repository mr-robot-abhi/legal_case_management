import admin from "firebase-admin";
import dotenv from "dotenv";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
});

export const sendNotification = async (token: string, title: string, body: string) => {
  try {
    await admin.messaging().send({
      token,
      notification: { title, body },
    });
    console.log("📩 Notification sent");
  } catch (error) {
    console.error("❌ Failed to send notification", error);
  }
};

export default admin;
