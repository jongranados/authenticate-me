const express = require('express');
const router = express.Router();
const apiRouter = require('./api'); 

// test route: testing csurf middleware functionality
router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

router.use('/api', apiRouter); 

// static routes:
// serve React build files in production environment
if (process.env.NODE_ENV === 'production') { 
    const path = require('path'); 

    // serve the frontend's index.html file at the root route
    router.get('/', (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html')); 
    }); 

    // serve the static assets in the frontend's build folder
    router.use(express.static(path.resolve('../frontend/build'))); 

    // serve the frontend's index.html file at all other routes NOT starting with /api
    router.get(/^(?!\/?api).*/, (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html')); 
    }); 
}

// called to get the XSRF-TOKEN cookie to frontend while in development environment (since React and Express will be on two different servers). 
if (process.env.NODE_ENV !== 'production') { 
    router.get('/api/csrf/restore', (req, res) => { 
        res.cookie('XSRF-TOKEN', req.csrfToken()); 
        return res.json({}); 
    }); 
}

module.exports = router;
