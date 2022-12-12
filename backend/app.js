// Express application 

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { ValidationError } = require('sequelize'); 

const { environment } = require('./config');
const e = require('express');
const isProduction = environment === 'production'; 

const app = express(); 

app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(express.json()); 

// security middleware
if (isProduction) {
    app.use(cors());
}

app.use(
    helmet.crossOriginResourcePolicy({
        policy: 'cross-origin'
    })
); 

app.use(
    csurf({
        cookie: { 
            secure: isProduction, 
            sameSite: isProduction && 'Lax', 
            httpOnly: true
        }
    })
); 

// route connections
app.use(routes);

// resource not found error-handler
app.use((_req, _res, next) => { 
    const err = new Error(`The requested resource couldn't be found.`); 
    err.title = 'Resource Not Found'; 
    err.errors = [`The requested resource couldn't be found.`]; 
    err.status = 404; 
    next(err); 
}); 

// sequelize error-handler
app.use((err, _req, _res, next) => { 
    if (err instanceof ValidationError) { 
        err.errors = err.errors.map((error) => error.message); 
        err.title = 'Validation error'; 
    }

    next(err); 
}); 

// error formatter error-handler
app.use((err, _req, res, _next) => { 
    res.status(err.status || 500); 
    console.error(err); 
    res.json({ 
        title: err.title || 'Server Error', 
        message: err.message, 
        errors: err.errors, 
        stack: isProduction ? null : err.stack
    }); 
}); 

module.exports = app;  
