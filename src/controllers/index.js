const getBillet = (req, res) => {
    const { barcode } = req.params
    res.status(200).json({BarCode: barcode.replace(" ", "")})
};

export default getBillet;