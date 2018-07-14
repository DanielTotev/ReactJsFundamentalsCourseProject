const express = require('express');
const app = express();
const ENV = 'development';
const settings = require('./config/settings')[ENV]

require('./config/express-config')(app);
require('./config/database')(settings);
require('./config/routes')(app);

app.post('/', (req, res) => {
    console.log(req.body);
    res.end();
});

app.listen(1337, () => console.log('Express ready!'));