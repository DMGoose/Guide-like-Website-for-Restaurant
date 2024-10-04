const { getAllRestaurants, getDetailedRestaurant } = require('../controllers/restaurantsController.jsx');

const router = require('express').Router();

router.post("/getAllRestaurants", getAllRestaurants);
router.post("/getDetailedRestaurant", getDetailedRestaurant);

module.exports = router;
