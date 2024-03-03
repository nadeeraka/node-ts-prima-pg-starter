import { Request, Response } from "express";

export async function getStatus(
  req: Request,
  res: Response
): Promise<Response> {
  return res.status(200).send({ message: "status 👍" });
}
