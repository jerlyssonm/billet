const removeSpace = (params) => {
    params = params.split(" ");
    params = params.join("")
    return params
};

export default removeSpace