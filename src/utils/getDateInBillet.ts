const getDataInBillet = (code: string) => {
    const fator = parseInt(code.substring(4,8));

    const initialDateBase = new Date(1997,10-1,7);

    initialDateBase.setTime(initialDateBase.getTime() + (fator * 24 * 60 * 60 * 1000));

    const expDate = initialDateBase;
    
    return `${expDate.getFullYear()}/${expDate.getMonth()+1}/${expDate.getDate()}`;
};

export default getDataInBillet;