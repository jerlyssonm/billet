
const getBillet = (req, res) => {
    const { output } = req
    res.status(200).json(output)
};

export default getBillet;