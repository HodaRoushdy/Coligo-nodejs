import { Request, Response } from 'express';

export const errorHandler = (err:any, req: Request, res: Response) => {
  return res.status(err.status).json({ msg: err.message });
};

