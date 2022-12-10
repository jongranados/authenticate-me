const express = require('express');
const router = express.Router();

// test route: testing csurf middleware middleware functionality
router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
});

module.exports = router;
