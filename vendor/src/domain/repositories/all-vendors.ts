import { Vendor } from "../entities/vendor";
import { Vendors } from "./interface";
export const allVendors = async () => {
  try {
    // Access data from db
    const result: Array<Vendors> = await Vendor.find({});
    // // Validate return value and respond correspondly
    if (result.length > 0) return result;
    return null;
  } catch (error) {
    // Error Handle
    console.error("Error fetch vendors:", error);
    throw error;
  }
};
