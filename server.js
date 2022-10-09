const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');
const { application } = require('express');

const hostname = '127.0.0.1';
const port = 3001;

// configure bodyparser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

//configure cors
app.use(cors());

//consfigure the router
app.use('/api/', router);

//get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express server of employee portal </h2>`);
});

application.listen(port, hostname, () => {
    console.log(`express server is started at http://${hostname} :${port}`)
});