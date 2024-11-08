import express, { Request, Response } from "express";

export const app = express();

// TODO: update and move the routes below to the appropriate directories
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});

app.all("*", (req: Request, res: Response) => {
  res.status(404).send({ error: `Not Found Route - ${req.method} ${req.path}` });
});
