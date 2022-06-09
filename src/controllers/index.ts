import { Request, Response } from "express";


const getBillet = (req: Request, res: Response): Response => {
    const { lastOutput } = req;
    return res.status(200).json(lastOutput);
};

export default getBillet;