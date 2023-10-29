import { checkExist, create } from "../../domain/repositories";
import { RegCredentials } from './interfaces'
export const createUser = async (userData: RegCredentials) => {
  try {
    // Validate user data
      const { username, hashedPassword, email} = userData;
    // // Check if the user already exists
    const existingUser = await checkExist(email);
    if (existingUser) {
      return {
        success: false,
        message: "User already exists with this email address",
      };
    }
    // // Create a new user
    const newUser = await create({
      username,
      email,
      password: hashedPassword,
    });

    // // Return the newly registered user
    return { success: true, user: newUser };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      message: "An error occurred while registering the user",
    };
  }
};
