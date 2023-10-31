import { Request, Response } from "express";
import { LogInCredentials, Vendor } from "./interfaces";
import { loginVendor } from "../../domain/repositories";
import { compare } from "bcrypt";
export const logInVendor = async (vendorData: LogInCredentials) => {
  try {
    // Validate vendor data
    const { email, password }: LogInCredentials = vendorData;

    // Find the vendor with email
    const vendor = await loginVendor(email);
    if (!vendor)
      return { success: false, status: 404, message: "Vendor not found" };

    // Check password
    const { password: dbpass } = vendor;

    // // Compare
    const valid = compare(password, dbpass);

    // // If not valid return false
    if (!valid)
      return { success: false, status: 400, message: "Incorrect password" };

    // // Create a new object which exclude password and __v
    const loggedVendor: Omit<Vendor, "password" | "__v"> = {
      ...vendor,
      _id: vendor._id, // Include '_id' since it's not omitted
    };
    // Return loggedVendor
    return {
      success: true,
      status: 200,
      vendor: loggedVendor,
    };
  } catch (error) {
    return {
        success: false,
        status: 500,
        message: "An error occurred while logIn the vendor",
      };
  }
};
