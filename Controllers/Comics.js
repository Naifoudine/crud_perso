const Comics = require('../Models/Comics')
/**
 * Api et web
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.ApiCreateComics = (req, res, next) => {
    const comics = new Comics(req.body)
    comics.save().then(
        () => {
            res.status(201).json({
                message: 'Enregistré avec succès!'
            });console.log("yes !" + comics )
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    )
}
/**
 * Modifie comics par API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 
exports.ApimodifyComics = (req, res, next) => {
    Comics.updateOne({ _id: req.params.id }, { _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Comics modifié !' }))
        .catch(error => res.status(400).json({ error }));
};*/
/**
 * Sup. comics par API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 
exports.deleteComics = (req, res, next) => {
    Comics.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Comics supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};*/
/**
 * recherche par _id comics passant par l'API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.ApigetOneComics = (req, res, next) => {
    Comics.findOne({ _id: req.params.id })
        .then(comics => res.status(200).json(comics))
        .catch(error => res.status(404).json({ error }));
};
/*
exports.getAllComics = (req, res, next) => {
    Comics.find()
        .then(comics => res.status(200).json(comics))
        .then((comic) => {
            res.render('pages/home.ejs',{
                comics
            })
            console.log("x ici !"+ x)
        })
        .catch(error => res.status(400).json({ error }));

};*/

/**
 * API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getAllComics = (req, res, next) => {
    Comics.find().exec(function (err, comics) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("pages/Comics/comics.ejs", {comics: comics});
          console.log(comics)
        }
      })
    }

exports.getOneComics = (req, res, next) => {
    Comics.findOne({ _id: req.params.id }).exec(function (err, comics) {
        if (err) {
          console.log("Error:", err);
        }
        else {
          res.render("pages/Comics/details.ejs", {comics: comics});
        }
      });
};
/**
 *  comics par Web
 * @param {*} req 
 * @param {*} res retourne la vue "pages/Comics/create"
 * @param {*} next 
 */
exports.addComics = (req, res, next) => {
    res.render("pages/Comics/create"); 
}

/**
 * Create par web
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
*/ 
exports.createComics = (req, res, next) => {
    const comics = new Comics(req.body)
    comics.save(function(err) {
        if(err) {
          console.log(err);
          res.render("pages/Comics/create");
        } else {
          console.log("Comics créé avec succès.");
          res.redirect("/comics/");
        }
      })
}
/**
 * Rend page edition
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
*/ 
exports.editComics = (req, res, next) => {
    Comics.findOne({_id: req.params.id}).exec(function (err, comics) {
        if (err) {
          console.log("Error:", err);
        }
        else {
            res.render("pages/Comics/edit", {comics: comics});
            console.log(comics);
        }
      });
};


exports.modifyComics = (req, res, next) => {
    Comics.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            description: req.body.description,
        }
    },
        { new: true },
        function (err, comics) {
            if (err) {
                console.log(err);
                res.render("pages/Comics/edit", { comics: req.body });
            }
            console.log(comics);
            res.redirect("/comics/");
        });
};

exports.deleteComics = (req, res, next) => {
    Comics.deleteOne({ _id: req.params.id },function(err, perso) {
        if (err) throw err;
        console.log("Success");
        res.redirect('/comics/');
    });
};

/*exports.deleteComics = (req, res, next) => 
    Comics.findOneAndRemove({
        _id: req.params._id
    }, function(err, user) {
        if (err) throw err;
        console.log("Success");
        res.redirect('/comics/');

    });  
};*/