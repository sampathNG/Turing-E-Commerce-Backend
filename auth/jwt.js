require("dotenv").config()
const jwt = require("jsonwebtoken")

function generateToken(data){
    return jwt.sign({data},process.env.TOKEN_SECRET,{ expiresIn: '24h'})
}

function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.TOKEN_SECRET,(err,data)=>{
        console.log(err)
        if(err) return res.send(err)
        req.data = data
        
        next()
    })
}

module.exports = {generateToken,authenticateToken}