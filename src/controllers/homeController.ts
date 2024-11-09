import { Response, Request } from "express";

export const getIndex = (req: Request, res: Response) => {
  res.send("Hello from server");
};
