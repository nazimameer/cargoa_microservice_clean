import { User } from "../entities/user";
import { loggedUser } from "./interfaces";
export const loginUser = async (email: string) => {
  try {
    const result: loggedUser | null = await User.findOne({ email })
    if (result) return result;
    return null;
  } catch (error) {
    console.error("Error log user:", error);
    throw error;
  }
};
