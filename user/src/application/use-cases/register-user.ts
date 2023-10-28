import { create } from "../../domain/repositories/create-user";
export const createUser = async (userData: any) => {
  try {
    // Validate user data

    // Check if the user already exists
    const existingUser = await create(userData.email);
    if (existingUser) {
      return {
        success: false,
        message: "User already exists with this email address",
      };
    }
    // Create a new user
    const hashedPassword = userData.password;
    const newUser = await create({
      email: userData.email,
      username: userData.username,
      password: hashedPassword,
    });
    // Return the newly registered user

    return { success: true, user: newUser };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      success: false,
      message: "An error occurred while registering the user",
    };
  }
};
