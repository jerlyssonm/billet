import removeSpace from "./removeSpace"

const checkCharacters = (params) => {    
    let reiceived = removeSpace(params);
    
    reiceived = reiceived.split("")
    let newParams = ""
    for(let i=0; i < reiceived.length; i++){
        let char = Number(reiceived[i])
        if (Number.isNaN(char)) {
            return false
        }
        newParams += char
    }
    return newParams
}

export default checkCharacters