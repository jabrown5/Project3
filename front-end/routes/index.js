var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  res.render('index', { title: 'The PottyCheck' });
});

// // RENDER THE 'REGISTER A NEW USER' PAGE
// router.get('/register', function(req, res, next) {
//     res.render('register', {});
// });

// // RENDER THE 'RETURNING USER LOGIN' PAGE
// router.get('/login', function(req, res, next) {
//     res.render('login', {});
// });

// // RENDER THE 'ADD A NEW POTTY TO THE DB' PAGE
// router.get('/potty', function(req, res, next) {
//     res.render('potty', {});
// });

// // RENDER THE 'ADD A COMMENT' PAGE
// router.get('/comments', function(req, res, next) {
//     res.render('comments', {});
// });

module.exports = router;