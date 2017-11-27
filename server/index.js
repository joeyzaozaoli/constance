const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

/* * * * Middleware * * * */
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router); // Router configuration must be after all other configurations.

/* * * * Server * * * */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
