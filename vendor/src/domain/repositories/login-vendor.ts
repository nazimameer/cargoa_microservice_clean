import { Vendor } from "../entities/vendor";
import { loggedVendor } from "./interface";
export const loginVendor = async (email: string) => {
  try {
    // Access data from db
    const result: loggedVendor | null = await Vendor.findOne({ email });
    // // Validate return value and respond correspondly
    if (result) return result;
    return null;
  } catch (error) {
    // Error Handle
    console.error("Error log vendor:", error);
    throw error;
  }
};
