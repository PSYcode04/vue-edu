var express = require('express');
var router = express.Router();

router.get('/first', function(req,res) {
    const obj = {
        name: 'John',
        age: 30,
        job: 'developer',
        city: 'New York'
    };
    res.json(obj);
});

module.exports = router;
