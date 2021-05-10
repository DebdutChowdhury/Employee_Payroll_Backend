const express = require ('express');
const router = express.Router();
const empController = require('../controller/empController');
const Model = require('../models/empModel')

router.get('/', empController.findAll)

router.post('/register', empController.registration);

router.delete('/delete/:id', empController.deleteEmp);

router.put('/register/:id', empController.updateEmp)

router.get("/register/:id", empController.findOneEmp);

module.exports = router