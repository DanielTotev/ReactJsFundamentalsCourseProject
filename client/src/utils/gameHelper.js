const host = 'http://localhost:1337';

export default {
    create: (game) => {
        return fetch(`${host}/games/create`, {
            headers: {
                'Content-Type': 'application/json',
                authorization: 'bearer ' + localStorage.getItem('authtoken')
            },
            method: 'POST',
            body: JSON.stringify(game)
        })
    },

    getAll: () => {
        return fetch(`${host}/games/catalog`, {
            headers: {
                authorization: 'bearer ' + localStorage.getItem('authtoken')
            }
        })
            .then(data => data.json());
    },

    getById: (id) => {
        return fetch(`${host}/games/details/` + id)
            .then(data => data.json());
    },

    edit: (game) => {
        return fetch(`${host}/games/edit/${game._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'bearer ' + localStorage.getItem('authtoken')
            },
            body: JSON.stringify(game)
        }).then(data => data.json())
    },
    deleteGame: (game) => {
        return fetch(`${host}/games/delete/${game._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'bearer ' + localStorage.getItem('authtoken')
            }
        }).then(data => data.json());
    }
}