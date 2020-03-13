let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let authMiddleware = require('../middlewares/AuthMiddleware');

router.get('/dashboard', authMiddleware.isAuth, dashboardController.index);
router.get('/users', authMiddleware.isAuth, authMiddleware.hasAuthorization, dashboardController.users);

module.exports = router;
