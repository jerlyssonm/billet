const getPriceInBillet = (code: any) => {
    let output = parseInt(code.substring(9,19)).toString();
    let value = "";
    if (output.length < 6){
        let current = output.split("").reverse();
        current.splice(2,0,".")         
        value = current.reverse().join("")
    }else {
        let current = output.split("").reverse();
        current.splice(2,0,".")         
        current.splice(6,0,".")    
        if(current.length > 10){
            current.splice(10,0,".")
        }
        value = current.reverse().join("")
    }
    return value;
};

export default getPriceInBillet;