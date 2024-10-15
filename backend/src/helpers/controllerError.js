const controllerError = (res, error, location) => {

    console.log(`🔴🔴🔴 Error in ${location} controller: `, error.message);

    res.status(500).json({ error: "Internal server error 🔴" });
}

export default controllerError;