//// Core modules

//// External modules
const express = require('express');
const speakeasy = require('speakeasy')
const QRCode = require('qrcode');

//// Modules

// Router
let router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        return res.render('index.html')
    } catch (err) {
        next(err);
    }
});

module.exports = router;