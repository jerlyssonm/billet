import { checkCharacters } from "../services";

const validateBarCode = (req, res, next) => {
    const {barcode} = req.params
    if (!checkCharacters(barcode)){
        return res.status(404).json({message: "Only numbers are allowed."})
    }
    next();
};

export default validateBarCode;
