exports.lauphan = (req, res, next) => {
    const khachhang = true;
    if(khachhang){
        next();
    } else {
        res.redirect('/')
    }
}