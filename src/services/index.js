import { getBarCode, getDateInBillet, getPriceInBillet } from "../utils"

const getResult = (newCode) => {
    let output = {};
    if(newCode.length == 44){
        output.barCode = newCode 
        output.expirateDate = getDateInBillet(newCode)
        output.amount = getPriceInBillet(newCode)
    }else {
        output.barCode = getBarCode(newCode)
        output.expirateDate = getDateInBillet(getBarCode(newCode))
        output.amount = getPriceInBillet(getBarCode(newCode))
    };
    return output;
};

export default getResult;