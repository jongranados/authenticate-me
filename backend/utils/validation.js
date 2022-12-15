// utility middleware to validate login request body

const { validationResult } = require('express-validator'); 

// middlwareware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => { 
    const validationErrors = validationResul(req); 

    if (!validationErrors.isEmpty()) { 
        const errors = validationErrors
            .array()
            .map((error) => `${error.msg}`); 

        const err = Error('Bad request.'); 
        err.errors = errors; 
        err.status = 400; 
        err.title = 'Bad request.'; 
        next(err); 
    }
    next(); 
};

module.exports = handleValidationErrors; 
