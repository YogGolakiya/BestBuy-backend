const { Router } = require("express");
const router = Router();
const {registerMail} = require('../controllers/SendMail')

router.post('/sendmail', registerMail);

module.exports = router;