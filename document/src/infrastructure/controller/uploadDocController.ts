import {Request, Response} from 'express';

export const uplodDoc = (req: Request, res:Response) => {
    const fileData = req.file;
    const { vendor, shippingDate, quantity, productName } = req.body;
    console.log(fileData);
}