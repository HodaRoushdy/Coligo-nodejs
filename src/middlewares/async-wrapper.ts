import { Request, Response } from "express";

export const asyncWrapper = (
  callback: (req: Request, res: Response) => Promise<void>
) => {
  return async (req: Request, res: Response) => {
    try {
      await callback(req, res);
    } catch (error) {
      res.status(500).json({ status: "internal server error" })
      console.log(error)
    }
  };
};
