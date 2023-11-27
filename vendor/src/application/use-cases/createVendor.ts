import { checkExist, create } from "../../domain/repositories";
import { RegCredentials } from "./interfaces";


export const createVendor = async (vendorData: RegCredentials) => {
    try {
        // Validate vendor data
        const { username, hashedPassword, email }: RegCredentials = vendorData;
        // // Check if the vendor already exists
        const existingVendor = await checkExist(email);
        if (existingVendor) {
          return {
            success: false,
            message: "Vendor already exists with this email address",
          };
        }
        // // Create a new vendor
        const newVendor = await create({
          username,
          email,
          password: hashedPassword,
        });
    
        // // Return the newly registered vendor
        return { success: true, vendor: newVendor };
      } catch (error) {
        console.error("Error registering vendor:", error);
        return {
          success: false,
          message: "An error occurred while registering the vendor",
        };
      }
}