//extrnal imports
const express = require('express');

//variables
const router = express.Router();  

//internal import
const meControllers = require('../controllers/me.controllers');

// Route
router.route('/reset-score')
.put(meControllers.resetScore);

router.route('')
.put(meControllers.updateMe)
.get(meControllers.getMe)
.delete(meControllers.deleteMe);

// export
module.exports= router;