import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
export const authentication = (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const secretKey = process.env.JWT_SECRET as string;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const parsedToken = token.split(' ').pop() as string;
  
  verify(parsedToken, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { role } = decoded as { role: string };

    return res.status(200).json({ role });
  });
};

