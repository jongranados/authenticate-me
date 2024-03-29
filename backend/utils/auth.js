// user authentication middlewares

const jwt = require('jsonwebtoken'); 
const { User } = require('../db/models');
const { jwtConfig } = require('../config'); 

const { secret, expiresIn } = jwtConfig; 

// sets the JWT cookie after a user is looged in or signed up
const setTokenCookie = (res, user) => { 
    const token = jwt.sign( 
        { data: user.toSafeObject() }, 
        secret, 
        { expiresIn: parseInt(expiresIn) }
    );

    const isProduction = process.env.NODE_ENV === 'production'; 

    // set the generated token cookie 
    res.cookie('token', token, { 
        maxAge: expiresIn * 1000, 
        httpOnly: true, 
        secure: isProduction, 
        sameSite: isProduction && 'Lax'
    }); 

    return token; 
};

// restores the session user based on the contents of the JWT cookie
const restoreUser = (req, res, next) => { 
    const { token } = req.cookies; 

    return jwt.verify(token, secret, null, async (err, jwtPayload) => { 
        if (err) { 
            return next(); 
        }

        try { 
            const { id } = jwtPayload.data; 
            req.user = await User.scope('currentUser').findByPk(id); 
        } catch (e) { 
            res.clearCookie('token'); 
            return next(); 
        }

        if (!req.user) { 
            res.clearCookie('token'); 
        }

        return next(); 
    }); 
}

// grants or denies a user access to a route depending on output of restoreUser. 
const requireAuth = [
    restoreUser, 
    function (req, _res, next) { 
        if (req.user) { 
            return next(); 
        }

        const err = new Error('Unauthorized'); 
        err.title = 'Unauthorized'; 
        err.errors = ['Unauthorized'];
        err.status = 401; 
        return next(err); 
    }
]; 

module.exports = { setTokenCookie, restoreUser, requireAuth }; 
