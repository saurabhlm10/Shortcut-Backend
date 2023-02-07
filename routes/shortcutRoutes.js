const express = require('express')

const router = express.Router()

const {createShortcut} = require('../controllers/createShortcut')
const {getShortcuts} = require('../controllers/getShortcuts')
const {getShortcut} = require('../controllers/getShortcut');
const { home } = require('../controllers/home');
const { searchShortcut } = require('../controllers/searchShortcut');
const { deleteShortcut } = require('../controllers/deleteShortcut');
const { editShortcut } = require('../controllers/editShortcut');

router.get('/', home);

router.post('/api/createshortcut', createShortcut)
router.get('/api/getshortcuts', getShortcuts)
router.get('/api/getshortcut/:shortcutId', getShortcut)
router.get('/api/searchshortcut/:searchTerm', searchShortcut)
router.delete('/api/deleteshortcut/:shortcutId', deleteShortcut)
router.put('/api/editshortcut/:shortcutId', editShortcut)

module.exports = router