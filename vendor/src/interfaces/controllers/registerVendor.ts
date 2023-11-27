import { Request, Response } from 'express';
import { RegCredentials } from './interfaces';
import { genSalt, hash } from 'bcrypt';
import { createVendor } from '../../application/use-cases/createVendor';

export const register = async (req: Request, res: Response) => {
    
  try {
    if (!req.body) {
      return res.status(404).json({ message: "Credentails not found" });
    }

    const { username, password, email }: RegCredentials = req.body;
    if (!username || !password || !email) {
      return res.status(404).json({ message: "Credentials not found" });
    }

    // Generate a salt
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);

    // // Hash the password with the generated salt
    const hashedPassword = await hash(password, salt);
    // Create a user object
    const vendor = {
      username,
      email,
      hashedPassword,
    };
    // Call use-case
    const newVendor = await createVendor(vendor);
    if (newVendor.success === false)
      return res.status(409).json({ message: newVendor.message });
    return res.status(201).json(newVendor);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
  };