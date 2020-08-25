const express = require('express')
const router = express.Router()

const controller = require('../controller/productController')

router.get('/', controller.listar)








module.exports = router;