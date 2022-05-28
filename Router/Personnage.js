const express = require('express');
const router = express.Router();

const PersoCtrl = require('../Controllers/Personnage');

router.post('/perso/create', PersoCtrl.createPreso)
router.get('/perso/create', PersoCtrl.addPreso)


router.get('/persos/edit/:id', PersoCtrl.editPerso);
router.post('/persos/update/:id', PersoCtrl.modifyPerso);
/**
    delete for API
*/
//router.delete('/persos/delete/:id', PersoCtrl.deletePerso);
/**
 * Contournement delete Web
 */
router.get('/persos/delete/:id', PersoCtrl.deletePerso);
router.get('/persos/:id', PersoCtrl.getOnePerso);
router.get('/persos', PersoCtrl.getAllPersos);
/*router.get("/", (req, res) => {
    Personnage.findOne({ _id: req.params.id })
        .then(perso => res.status(200).json(perso))
        .then(result => res.render("pages/home.ejs"))
        .catch(error => res.status(404).json({ error }));
    
})*/

module.exports = router;