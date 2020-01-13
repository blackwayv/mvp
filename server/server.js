const express = require('express');
const app = express();
const hiscores = require('osrs-json-hiscores');


app.listen(3000, () => console.log('OSRS Account Planner listening on port 3000!'));
app.use(express.static('dist'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/stats/:rsn', (req, res) => {
  console.log(req.params.rsn);
  hiscores.getStats(req.params.rsn).then(response => res.send(response));
});