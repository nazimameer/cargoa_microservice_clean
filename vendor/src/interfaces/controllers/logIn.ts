import { Request, Response } from "express";
import { logInVendor } from "../../application/use-cases";
import { sign } from "jsonwebtoken";

export const logIn = async (req: Request, res: Response) => {
  try {
    // Validate req.body
    if (!req.body) {
      return res.status(404).json({ message: "Credentails not found" });
    }
    // Destructure credentails
    const { email, password } = req.body;

    // Validate credentails
    if (!password || !email) {
      return res.status(404).json({ message: "Credentials not found" });
    }

    const vendor = {
      email,
      password,
    };

    // Call use-case
    const result = await logInVendor(vendor);
    // if (result.success === false)
    //   return res.status(result.status).json({ message: result.message });
    const { vendor: loggedVendor } = result;

    //jwt generates

    // // Payload
    const payload = {
      id: loggedVendor?._id,
      email: loggedVendor?.email,
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
    return res.status(201).json({ token: Token });
  } catch (error) {
    // Error handle
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};