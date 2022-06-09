import { NextFunction, Request, Response } from "express";
import { checkCharacters, removeSpace } from "../utils";
import getResult from "../services";


const validateBarCode = (req: Request, res: Response, next: NextFunction) => {
    const {barcode} = req.params;
    const param = removeSpace(barcode);

    if (!checkCharacters(param)){
        return res.status(400).json({message: "Only numbers are allowed."})
    };

    let newCode = checkCharacters(param);
    
    if (newCode){
        if (newCode.length < 44 || newCode.length > 48){
            return res.status(400).json({message: "Enter a valid code, the default is a numerical string of 44 to 48 characters."});
        };
        const output = getResult(newCode);
        req.lastOutput = output
        return next();
    }
};

export default validateBarCode;
