import { LogInCredentials, User } from "./interfaces";
import { loginUser } from "../../domain/repositories";
import { compare } from "bcrypt";
export const logInUser = async (userData: LogInCredentials) => {
  try {
    // Validate user data
    const { email, password }: LogInCredentials = userData;
    // Find the user with email
    const user = await loginUser(email);
    if (!user)
      return { success: false, status: 404, message: "User not found" };

    // Check password
    const { password: dbpass } = user;

    // // Compare
    const valid = compare(password, dbpass);

    // // If not valid return false
    if (!valid)
      return { success: false, status: 400, message: "Incorrect password" };

    // // Create a new object which exclude password and __v
    const loggedUser: Omit<User, "password" | "__v"> = {
      ...user,
      _id: user._id, // Include '_id' since it's not omitted
    };

    // Return loggedUser
    return {
      success: true,
      status: 200,
      user: loggedUser,
    };
  } catch (error) {
    console.error("Error logIn user:", error);
    return {
      success: false,
      status: 500,
      message: "An error occurred while logIn the user",
    };
  }
};