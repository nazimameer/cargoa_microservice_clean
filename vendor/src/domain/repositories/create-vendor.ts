import { Vendor } from "../../domain/entities/vendor";
import { RegCredentials } from "./interface";
export const create = async (vendorData: RegCredentials) => {
  try {
    const result = await Vendor.create(vendorData);
    return result;
  } catch (error) {
    console.error("Error creating vendor:", error);
    throw error;
  }
};
