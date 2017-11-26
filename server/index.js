const express = require('express');
const app = express();

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Middleware
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use(express.static(__dirname + '/../client/dist'));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Router
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.get('/company', (req, res) => {
  res.status(200).send('You got it');
});

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Server
* * * * * * * * * * * * * * * * * * * * * * * * * * */

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
