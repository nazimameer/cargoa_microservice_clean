import { Request, Response } from "express";
import { createUser } from "../../application/use-cases/register-user";
import { genSalt, hash, compare} from 'bcrypt';
export const registerUser = async (req: Request, res: Response) => {
  try {
    if(!req.body){
      return res.status(404).json({message: "Credentails not found"})
    }
      const { username, password, email } = req.body;
      if(!username || !password || !email){
        return res.status(404).json({message: "Credentials not found"})
      }

      console.log(username, password, email)
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

      const prevPass ="NAZIM123" 
      const result = compare(prevPass, hashedPassword);

    res.send(result)
    // const newUser = await createUser(user);
    // return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};