'use strict';

var express = require('express');
var controller = require('./course.controller');
// ar multer  = require('multer');

// // var upload = multer({ dest: 'api/courses/' });

// var upload = multer({ dest: 'uploads/' })
var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create); //, 


// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);

module.exports = router;