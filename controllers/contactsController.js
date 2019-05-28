const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Contact
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Contact
            .create(req.body)
            .then(dbModel => { 
                console.log(req.body); 
               
                res.json(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Contact
            .findById(req.params.id)
            .then(dbModel =>  {
                console.log(dbModel.contacts);
                
                const contactDataArr = dbModel.contacts.map(async id => {
                    return await db.Contact.findById(id)
                })

                dbModel.contacts = contactDataArr

                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Contact
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Contact
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};