import { Request, Response } from "express";
import { getVendors } from "../../application/use-cases";
export const allVendors = async (req: Request, res: Response) => {
  try {
    // No need to validate any requests
    const vendors = await getVendors();

    // // Validate the return value from use-case
    if (vendors && vendors.success === false)
      return res.status(vendors.status).json({ message: vendors.message });

    // // Send response if return value is valid
    if (vendors && vendors.status !== undefined)
      return res.status(vendors.status).json(vendors.vendors);
  } catch (error) {
    // Error handle
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};