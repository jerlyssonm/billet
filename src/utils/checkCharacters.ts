
const checkCharacters = (params: string) => {    
    let NewParams: string[] = params.split("")
    let output: string | boolean = "";

    for(let i=0; i < NewParams.length; i++){
        let char = Number(NewParams[i])
        if (Number.isNaN(char)) {
            return false
        };
        output += char;
    };
    return output;
}

export default checkCharacters