import expressJWT from "express-jwt"

exports.lauphan = (req, res, next) => {
    const khachhang = true;
    if(khachhang){
        next();
    } else {
        res.redirect('/')
    }
}

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth"
});

export const isAuth = (req, res, next) => {
    console.log(req.auth)
}