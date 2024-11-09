import { Response, Request } from "express";

export const get404 = (req: Request, res: Response) => {
  res.status(404).send({ error: `Not Found Route - ${req.method} ${req.path}` });
};
