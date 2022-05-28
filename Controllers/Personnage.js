const Personnage = require('../Models/Personnage')
/*
exports.createPreso = (req, res, next) => {
    const perso = new Personnage(req.body)
    perso.save().then(
        () => {
            res.status(201).json({
                message: 'Enregistré avec succès!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
}

exports.modifyPerso = (req, res, next) => {
    Personnage.updateOne({ _id: req.params.id }, { _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Perso modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deletePerso = (req, res, next) => {
    Personnage.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Perso supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};

/*exports.getOnePerso = (req, res, next) => {
    Personnage.findOne({ _id: req.params.id })
        .then(perso => res.status(200).json(perso))
        .catch(error => res.status(404).json({ error }));
};*/

/*exports.getAllPersos = (req, res, next) => {
    Personnage.find()
        .then(persos => res.status(200).json(persos))
        .then((x) => {
            res.render('pages/home.ejs',{
                x
            })
            console.log("x ici !"+ x)
        })
        .catch(error => res.status(400).json({ error }));
};*/
/**
 * Renvoit tous les persos par Web
 */
exports.getAllPersos = (req, res, next) => {
    Personnage.find().exec(function (err, persos) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("pages/personnages/persos.ejs", {persos: persos});
        }
      })
    }
/**
 * Renvoit un perso par Web
 */
exports.getOnePerso = (req, res, next) => {
    Personnage.findOne({ _id: req.params.id }).exec(function (err, perso) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("pages/personnages/perso.ejs", {perso: perso});
        }
      });
};

/**
 * Renvoit la Vue Ajout perso
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.addPreso = (req, res, next) => {
    res.render("pages/personnages/create"); 
}

/**
 * Sauvegarde l'ajout
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.createPreso = (req, res, next) => {
    const perso = new Personnage(req.body)
    perso.save(function(err) {
        if(err) {
          console.log(err);
          res.render("pages/personnages/create");
        } else {
          console.log("Perso créé avec succès.");
          res.redirect("/persos/");
        }
      })
}

/**
 * Renvoit la Vue Edit
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.editPerso = (req, res, next) => {
    Personnage.findOne({_id: req.params.id}).exec(function (err, perso) {
        if (err) {
          console.log("Error:", err);
        }
        else {
            res.render("pages/personnages/edit", {perso: perso});
            console.log(perso);
        }
      });
};

/**
 * Sauvegarde les modifications
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.modifyPerso = (req, res, next) => {
    Personnage.findByIdAndUpdate(req.params.id, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            genre: req.body.genre
        }
    },
        { new: true },
        function (err, perso) {
            if (err) {
                console.log(err);
                res.render("pages/personnages/edit", { perso: req.body });
            }
            console.log(perso);
            res.redirect("/persos/");
        });
};

/**
 * Supprime un perso
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
exports.deletePerso = (req, res, next) => {
    /*Personnage.findOneAndRemove({
        _id: req.params._id
    }, function(err, user) {
        if (err) throw err;
        console.log("Success");
        res.redirect('/persos/');

    });*/
    Personnage.deleteOne({ _id: req.params.id },function(err, perso) {
        if (err) throw err;
        console.log("Success");
        res.redirect('/persos/');

    });
    /*Personnage.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Perso supprimé !' }))
        .catch(error => res.status(400).json({ error }));*/
};