const express = require('express');
const router = require('./router');

const app = express();

/* * * * Middleware * * * */
app.use(express.static(__dirname + '/../client/dist'));
app.use('/', router);

/* * * * Server * * * */
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
