const CONTROLLERS = require('../controllers');
const authCheck = require('./../middleware/auth-check');

module.exports = (app) => {
    app.post('/users/register', CONTROLLERS.USER_CONTROLLER.register);
    app.post('/users/login', CONTROLLERS.USER_CONTROLLER.login);
    
    app.get('/games/catalog',authCheck, CONTROLLERS.GAME_CONTROLLER.listAll);

    app.post('/games/create', authCheck, CONTROLLERS.GAME_CONTROLLER.craete);

    app.post('/games/edit/:id', authCheck, CONTROLLERS.GAME_CONTROLLER.editGame);

    app.delete('/games/delete/:id', authCheck, CONTROLLERS.GAME_CONTROLLER.deleteGame);

    app.get('/games/details/:id', CONTROLLERS.GAME_CONTROLLER.getById);

    console.log('All routes are set');
}