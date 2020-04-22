const path = require('path')
const express = require('express');
const history = require('connect-history-api-fallback');
const app = express();
const port = process.env.PORT;
const staticFileMiddleware = express.static(path.join(__dirname));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(staticFileMiddleware);

app.use(history({ index: 'index.html' }));

app.use('/', express.static(path.join(__dirname + '/')));

app.use(staticFileMiddleware);

app.listen(port, function () {
  console.log('Client app is listening on port:' + port);
});
