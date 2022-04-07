const Personnage = require('../Models/Personnage')

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

exports.getOnePerso = (req, res, next) => {
    Personnage.findOne({ _id: req.params.id })
        .then(perso => res.status(200).json(perso))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllPersos = (req, res, next) => {
    Personnage.find()
        .then(persos => res.status(200).json(persos))
        .catch(error => res.status(400).json({ error }));
};