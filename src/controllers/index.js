const getBillet = (req, res) => {
    const { output } = req;
    return res.status(200).json(output);
};

export default getBillet;