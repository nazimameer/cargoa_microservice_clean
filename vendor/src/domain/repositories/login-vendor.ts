import { Vendor } from "../entities/vendor";
import { loggedVendor } from "./interface";
export const loginVendor = async (email: string) => {
  try {
    const result: loggedVendor | null = await Vendor.findOne({ email });
    if (result) return result;
    return null;
  } catch (error) {
    console.error("Error log vendor:", error);
    throw error;
  }
};
