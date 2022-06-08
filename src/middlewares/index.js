import getResult from "../services";
import { checkCharacters, removeSpace } from "../utils";


const validateBarCode = (req, res, next) => {
    const {barcode} = req.params;
    const param = removeSpace(barcode);

    if (!checkCharacters(param)){
        return res.status(400).json({message: "Only numbers are allowed."})
    };

    let newCode = checkCharacters(param);

    if (newCode.length < 44 || newCode.length > 48){
        return res.status(400).json({message: "Enter a valid code, the default is a numerical string of 44 to 48 characters."});
    };

    req.output = getResult(newCode);
    return next();
};

export default validateBarCode;
