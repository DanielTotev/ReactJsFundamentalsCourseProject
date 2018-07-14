const Game = require('mongoose').model('Game');

module.exports = {
    listAll: async (req, res) => {
        console.log(req.user);
        if (!req.user) {
            res.status(400).send({ message: 'you should be registered to see this page' });
        }
        let games = await Game.find({});
        res.send(games);
    },

    craete: async (req, res) => {
        console.log('Roles are ' + req.user.roles);
        if (!req.user || req.user.roles[0] !== 'Admin') {
            res.status(401).send({ message: 'Unauthorized!' });
        }
        try {
            await Game.create(req.body);
            res.send('Game created');
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    },

    getById: async (req, res) => {
        let id = req.params.id;
        try {
            let game = await Game.findById(id);
            res.send(game);
        } catch (err) {
            res.status(400).send({ message: 'Game not found!' });
        }
    },
    deleteGame: async (req, res) => {
        if (!req.user || req.user.roles[0] !== 'Admin') {
            res.status(401).send({ message: 'Unauthorized!' });
        }
        let id = req.params.id;
        try {
            await Game.findByIdAndRemove(id);
            res.status(200).send({ message: 'Game deleted' });
        } catch (err) {
            res.status(400).send({ message: 'Game does not exists anymore!' });
        }
    },
    editGame: async (req, res) => {
        console.log('Entered edit');
        if (!req.user || req.user.roles[0] !== 'Admin') {
            res.status(401).send({ message: 'Unauthorized!' });
        }
        let id = req.params.id;
        console.log(req.body);
        try {
            let game = await Game.findById(id);
            game.title = req.body.title;
            game.description = req.body.description;
            game.thumbnail = req.body.thumbnail;
            game.price = req.body.price;
            game.size = req.body.size;
            game.trailer = req.body.trailer;
            await game.save();
            console.log('Success');
            res.status(200).send({ message: 'Game edited' });
        } catch (err) {
            console.warn(err.message);
            res.status(400).send({ message: 'Game does not exists anymore!' });
        }

    }
};