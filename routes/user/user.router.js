const express = require('express');
const router = express.Router();

const { getUser } = require('./user.controller');

router.route('/user').get(getUser);

module.exports = router;
