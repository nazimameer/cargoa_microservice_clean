import {Request, Response} from 'express';

export const uplodDoc = (req: Request, res:Response) => {
    const fileData = req.file;
    console.log(req.body);
    res.write("hei")
}