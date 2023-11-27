import { Vendor } from "../../domain/entities/vendor";
export const checkExist = async (email: string) => {
  try {
    const result = await Vendor.findOne({ email });
    if (result) return true;
    return false;
  } catch (error) {
    console.error("Error check vendor:", error);
    throw error;
  }
};
