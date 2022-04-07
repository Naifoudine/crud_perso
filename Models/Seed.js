const mongoose = require('./Connection');
const Personnage = require('./Personnage');

const db = mongoose.connection;

db.on('open', () => {
    Personnage.deleteMany({})
    .then(() => {
        //seed data
        const seedData = [
            {firstName : "Elon", lastName:"Musk"},
            {firstName : "Jeff", lastName:"Besos"},
            {firstName : "Bill", lastName:"Gates"},
            {firstName : "Moi", lastName:"Lim"},
        ]

        // create new perso from seed data
        Personnage.create(seedData)
        .then((persos) => {
            console.log(persos);
            db.close();
        })
    })

} )