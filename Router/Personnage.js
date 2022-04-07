const express = require('express');
const router = express.Router();

const PersoCtrl = require('../Controllers/Personnage');

router.post('/', PersoCtrl.createPreso)

router.put('/:id', PersoCtrl.modifyPerso);
router.delete('/:id', PersoCtrl.deletePerso);
router.get('/:id', PersoCtrl.getOnePerso);
router.get('/', PersoCtrl.getAllPersos);

module.exports = router;