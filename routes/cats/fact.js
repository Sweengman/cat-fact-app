var express = require('express');
var router = express.Router();


const ROOT_URL = 'https://catfact.ninja/fact'

router.get('/', function(req, res, next) {
    fetch(`${ROOT_URL}`)
        .then(res => res.json())
        .then(fact => {
            console.log(fact.fact)
            res.render('cat/fact', { fact: fact.fact })
        })
})
module.exports = router;