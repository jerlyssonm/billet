const getBarCode = (code)=> {
    let out = "";
    let idBank = code.substring(0,3)
    let idCoin = code[3]
    let field_1 = code.substring(32,47)
    let field_2 = code.substring(4,9)
    let field_3 = code.substring(10, 20)
    let field_4 = code.substring(21, 31)
    out += idBank + idCoin + field_1 + field_2 + field_3 + field_4

    return out
};  

export default getBarCode;