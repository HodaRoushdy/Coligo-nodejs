import { Request, Response } from "express";

export const badRequest = (req: Request, res: Response) => {
  res.status(404).send(" bad request");
};
