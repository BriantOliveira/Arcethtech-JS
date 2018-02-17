const jwt = require('jsonwebtoken')

export.createJWT = function() {
    return jwt.sign({ id: dataValues.id }, process.env.SECRETKEY);
}

exports.cookie = function(){
    //Cookie expiration is 48 hours
    let jsonObject = {
        maxAge: 172800000,
        httpOnly: true
    }
    return jsonObject
}

exports.setUserIdCookie = function(resObject) {
    token = jtw.sign({ id: dataValues.id }, process.env.SECRETKEY);
    cookieOptions = {
        maxAge: 172800000,
        httpOnly: true
    };
    resObject.cookie('jtwToken', token, cookieOptions);
}
