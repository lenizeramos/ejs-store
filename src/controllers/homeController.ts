import { Response, Request } from "express";

export const getIndex = (req: Request, res: Response) => {
  //console.log(`homeController ${req.session.user?.name}`); 
  const data = {
    user: {
      name: req.session.user?.name
    }
  };
  res.render("pages/index", data);
};
