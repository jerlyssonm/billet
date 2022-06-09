const removeSpace = (params: string) => {
    let newParams: string[] = params.split(" ");
    let output: string = newParams.join("")
    return output
};

export default removeSpace