import admin from "firebase-admin";

const serviceAccount = require("../path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const sendNotification = (token: string, message: { title: string; body: string }): Promise<admin.messaging.BatchResponse> => {
  const payload = {
    notification: {
      title: message.title,
      body: message.body,
    },
  };

  return admin.messaging().sendMulticast({ tokens: [token], notification: payload.notification });
};
