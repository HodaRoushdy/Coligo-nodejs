
export const asyncWrapper = async (
  callback: (req: Request, res: Response) => Promise<void>
) => {
  return async (req: Request, res: Response) => {
    try {
      await callback(req, res);
    } catch (error) {
      console.log(error);
    }
  };
};
