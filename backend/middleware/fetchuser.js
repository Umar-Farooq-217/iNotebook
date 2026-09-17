var jwt = require('jsonwebtoken');
const jt = process.env.JWT_SECRET;
const fetchuser = async (req, res, next) => {
    // Get user from jwt token and add id to the req object
    const token = await req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate with valid token" });
    }

    try {
        const data = jwt.verify(token, jt);
        req.user = data.user;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate with valid token" });
    }
}

module.exports = fetchuser;