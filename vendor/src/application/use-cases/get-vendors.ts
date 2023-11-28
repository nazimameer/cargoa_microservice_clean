import { allVendors } from "../../domain/repositories";
export const getVendors = async () => {
  try {
    // Find all vendors
    const vendors = await allVendors();
    // // Validate return value
    if (vendors?.length !== 0 || vendors !== null) // Success response if valid
      return { success: true, status: 200, vendors: vendors };
    // // error response if not valid
    return {
      success: false,
      status: 404,
      message: "No vendors found",
    };
  } catch (error) {
    // Error handle
    console.log(error);
    return {
      success: false,
      status: 500,
      message: "An error occurred while logIn the vendor",
    };
  }
};
