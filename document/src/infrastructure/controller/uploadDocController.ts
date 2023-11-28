import {Request, Response} from 'express';

export const uplodDoc = (req: Request, res:Response) => {
    console.log(req.body);
    res.write("hei")
}