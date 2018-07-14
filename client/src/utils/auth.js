const host = 'http://localhost:1337';
const headers = {
    'Content-Type': 'application/json'
};

export default {
    login: (body) => {
        return fetch(`${host}/users/login`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)           
        }).then(data => data.json());
    },
    register: (body) => {
        return fetch(`${host}/users/register`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)           
        }).then(data => data.json());
    }
}