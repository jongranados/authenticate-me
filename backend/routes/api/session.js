// resources for route paths beginning with /api/session

const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler'); 

const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth'); 
const { User } = require('../../db/models'); 

// user login API route
router.post(
    '/', 
    asyncHandler(async (req, res, next) => { 
        const { credential, password } = req.body; 

        const user = await User.login({ credential, password }); 

        if (!user) { 
            const err = new Error('Login failed'); 
            err.status = 401; 
            err.title = 'Login failed.';
            err.errors = ['The provided credentials were invalid.']; 
            return next(err); 
        }

        await setTokenCookie(res, user); 

        return res.json({ 
            user
        });
    })
);

// user logout API route
router.delete(
    '/', 
    (_req, res) => { 
        res.clearCookie('token'); 
        return res.json({ message: 'success' }); 
    }
); 

// get session user API route
router.get(
    '/', 
    restoreUser, 
    (req, res) => { 
        const { user } = req; // restoreUser appends session user to req object under 'user' key
        if (user) { 
            return res.json({ 
                user: user.toSafeObject()
            }); 
        } else { 
            return res.json({}); 
        }
    }
);


module.exports = router; 
