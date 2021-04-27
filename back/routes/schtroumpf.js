const express = require('express')
const router = express.Router()
const schtroumpfController = require('../controllers/schtroumpfController')

router.get('/', schtroumpfController.index)
router.post('/show',schtroumpfController.show)
router.post('/store',schtroumpfController.store)
router.post('/update',schtroumpfController.update)
router.post('/delete',schtroumpfController.destroy)

module.exports = router
