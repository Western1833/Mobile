const express = require('express');
const config = require('./config/config.js');
const setupViewEngine = require('./config/handlebars.js');

const app = express();

setupViewEngine(app);

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(config.PORT, () => console.log(`Server is listening on PORT: ${config.PORT}...`));