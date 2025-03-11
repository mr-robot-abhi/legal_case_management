import express from "express";

const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
};

export default errorHandler;
