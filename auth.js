const dotenv = require('dotenv').config();

const auth = function (req, res, next) {
    const token = req.headers['authorization']

    if(token == process.env.SECRET_TOKEN)
        next();
    else
        return res.sendStatus(401);
}

module.exports = auth;