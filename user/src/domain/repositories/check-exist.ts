import { User } from "../../domain/entities/user";
export const checkExist = async (email: string) => {
  try {
    const result = await User.findOne({ email });
    if (result) return true;
    return false;
  } catch (error) {
    console.error("Error check user:", error);
    throw error;
  }
};
