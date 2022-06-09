const getBarCode = (code: string)=> {
    let out = "";
    const idBank = code.substring(0,3)
    const idCoin = code[3]
    const field_1 = code.substring(32,47)
    const field_2 = code.substring(4,9)
    const field_3 = code.substring(10, 20)
    const field_4 = code.substring(21, 31)
    out += idBank + idCoin + field_1 + field_2 + field_3 + field_4

    return out
};  

export default getBarCode;