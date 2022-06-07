const getBillet = (req, res) => {
    const { barcode } = req
    res.status(200).json({BarCode: barcode})
};

export default getBillet;