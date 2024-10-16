const routeNotFound = (req, res) => {

    const responseData = {
        error: [
            {
                path: req.originalUrl,
                message: 'Api Route Not Found... 🔴',
            },
        ],
    };

    res.status(404).json(responseData);
};


export default routeNotFound;