const getDataInBillet = (code) => {
    const fator = parseInt(code.substring(4,8));
    
    Date.prototype.addDays = function(days) {
        const dateInMl = new Date(this.valueOf());
        dateInMl.setDate(dateInMl.getDate() + days);
        return dateInMl;
    };
    const initialDateBase = new Date(1997,10-1,7);
    const expDate = initialDateBase.addDays(fator);
    return `${expDate.getFullYear()}/${expDate.getMonth()+1}/${expDate.getDate()}`;
};

export default getDataInBillet;