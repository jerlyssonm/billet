import { checkCharacters, removeSpace } from "../services";

const validateBarCode = (req, res, next) => {
    const {barcode} = req.params

    const param = removeSpace(barcode)
    if (!checkCharacters(param)){
        return res.status(404).json({message: "Only numbers are allowed."})
    }
    req.barcode = checkCharacters(param)
    next();
};

export default validateBarCode;
