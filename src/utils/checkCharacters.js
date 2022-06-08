
const checkCharacters = (params) => {    
    params = params.split("")
    let newParams = ""
    for(let i=0; i < params.length; i++){
        let char = Number(params[i])
        if (Number.isNaN(char)) {
            return false
        }
        newParams += char
    }
    return newParams
}

export default checkCharacters