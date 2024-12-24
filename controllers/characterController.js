const characters = require('../data/characters');
// const { characters } = require('../data/characters');

function index(req, res) {
    res.json(characters);
}

function show(req, res) {
    const id = parseInt(req.params.id)

    // res.send(`Dettagli del post con id ${id}`)
    let character = characters.characters.find(character => character.id === id)

    if (!character) {

        res.status(404)

        return res.json({
            error: 'Not found',
            message: 'Personaggio non trovato'
        })
    }

    res.json(character)
}

module.exports = { index, show };