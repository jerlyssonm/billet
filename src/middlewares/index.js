import { checkCharacters, getBarCode, removeSpace } from "../services";

const validateBarCode = (req, res, next) => {
    const {barcode} = req.params
    let output = {}
    const param = removeSpace(barcode)
    if (!checkCharacters(param)){
        return res.status(400).json({message: "Only numbers are allowed."})
    }

    let newCode = checkCharacters(param)

    if (newCode.length < 44 || newCode.length > 48){
        return res.status(400).json({message: "Enter a valid code, the default is a numerical string of 44 to 48 characters."})
    }
    output.barCode = getBarCode(newCode)

    req.output = output
    next();
};

export default validateBarCode;
