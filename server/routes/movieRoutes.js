const router = require('express').Router();
const movieController = require('../controllers/movieController.js');

router.get('/search', movieController.getSearch)
router.get('/genres', movieController.getGenres)

module.exports = router;