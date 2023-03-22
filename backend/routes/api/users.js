// resources for route paths beginning with /api/user

const express = require('express'); 
const router = express.Router(); 
const asyncHandler = require('express-async-handler'); 

const { setTokenCookie, requireAuth } = require('../../utils/auth'); 
const { User } = require('../../db/models'); 

const { check } = require('express-validator'); 
const { handleValidationErrors } = require('../../utils/validation'); 

// reqeust body validation middleware for the signup route
const validateSignup = [
    check('email') 
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Invalid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Username must be at least 4 character in length.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'), 
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters in length.'), 
    handleValidationErrors
]; 

// user signup API route
router.post(
    '/', 
    validateSignup,
    asyncHandler(async (req, res) => { 
        const { email, password, username } = req.body; 
        const user = await User.signup({ email, username, password }); 

        await setTokenCookie(res, user); 

        return res.json({ 
            user
        }); 
    }) 
); 

module.exports = router; 
