import { NextFunction } from "express";

const asyncWrapper = async (
  callback: (req: Request, res: Response, next: NextFunction) => Response
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper