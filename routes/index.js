var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await db("users").select('*');
  console.log(users);
  res.render('index', { title: 'Geekery', users });
});

router.get('/allusers', async function(req, res, next) {
  const users = await db("users").select('*');
  console.log(users);
  res.json(users);
});

module.exports = router;
