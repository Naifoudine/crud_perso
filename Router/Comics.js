const express = require('express');
const router = express.Router();

const ComicsCtrl = require('../Controllers/Comics');

router.post('/comics/create', ComicsCtrl.createComics)
router.get('/comics/create', ComicsCtrl.addComics)


router.get('/comics/edit/:id', ComicsCtrl.editComics);
router.post('/comics/update/:id', ComicsCtrl.modifyComics);

//router.delete('/comicss/delete/:id', ComicsCtrl.deletePerso);
// 
router.get('/comics/delete/:id', ComicsCtrl.deleteComics);
router.get('/comics/:id', ComicsCtrl.getOneComics);
router.get('/comics/', ComicsCtrl.getAllComics);
/*router.get("/", (req, res) => {
    Personnage.findOne({ _id: req.params.id })
        .then(perso => res.status(200).json(perso))
        .then(result => res.render("pages/home.ejs"))
        .catch(error => res.status(404).json({ error }));
    
})*/

module.exports = router;