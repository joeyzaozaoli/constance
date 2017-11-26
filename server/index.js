const express = require('express');
const app = express();

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Static Assets
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use(express.static(__dirname + '/../client/dist'));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Server
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
