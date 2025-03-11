import express from "express";

const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Authentication logic
  next();
};

export default authMiddleware;
