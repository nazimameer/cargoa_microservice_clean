import { Request, Response } from "express";
import { LogInCredentials } from "./interfaces";
import { logInUser } from "../../application/use-cases";
import { sign } from "jsonwebtoken";
export const loginIn = async (req: Request, res: Response) => {
  try {
    // Validate req.body
    if (!req.body) {
      return res.status(404).json({ message: "Credentails not found" });
    }
    // Destructure credentails
    const { email, password }: LogInCredentials = req.body;

    // Validate credentails
    if (!password || !email) {
      return res.status(404).json({ message: "Credentials not found" });
    }

    const user = {
      email,
      password,
    };
    // Call use-case
    const result = await logInUser(user);
    if (result.success === false)
      return res.status(result.status).json({ message: result.message });
    const { user: loggedUser } = result;
    //jwt generates

    // // Payload
    const payload = {
      id: loggedUser?._id,
      email: loggedUser?.email,
    };

    // // Secret Key
    const Secret = process.env.JWT_SECRET || "defaultSecret"; // Provided a default value if JWT_SECRET is not defined
    // // Expire
    const expire = {
      expiresIn: "1d", // 1 day
    };
    // // Sign jwt token

    const Token = sign(payload, Secret, expire);
    // Send resonse
    res.status(201).json({ token: Token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
