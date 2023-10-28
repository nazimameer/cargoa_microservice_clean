import { Request, Response } from "express";
import { createUser } from "../../application/use-cases/register-user";
export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await createUser(user);
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
