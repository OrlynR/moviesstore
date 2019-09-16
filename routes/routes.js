const { Router } = require('express');
const router = Router();

router.use(require('../controlles/signupControlles'));
router.use(require('../controlles/loginControlles'));
router.use(require('../controlles/subcriptionControlles'));
router.use(require('../controlles/paymentsControlles'));
router.use(require('../controlles/moviesControlles'));
router.use(require('../controlles/historyControlles'));




module.exports = router;