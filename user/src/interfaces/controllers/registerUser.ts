import { Request, Response } from "express";
import { createUser } from "../../application/use-cases/register-user";
import { genSalt, hash } from 'bcrypt';
import { RegCredentials } from './interfaces' 
export const registerUser = async (req: Request, res: Response) => {
  try {
    if(!req.body){
      return res.status(404).json({message: "Credentails not found"})
    }
      const { username, password, email }:RegCredentials = req.body;
      if(!username || !password || !email){
        return res.status(404).json({message: "Credentials not found"})
      }

      // Generate a salt
      const saltRounds = 10;
      const salt = await genSalt(saltRounds)

      // // Hash the password with the generated salt
      const hashedPassword = await hash(password, salt);
      // Create a user object
      const user = {
        username,
        email,
        hashedPassword
      }
// Call use-case
    const newUser = await createUser(user);
    if(newUser.success === false) return res.status(409).json({message: newUser.message})
    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};