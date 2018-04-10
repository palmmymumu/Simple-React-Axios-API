const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.listen(8000);

var bears = [];

app.get('/', (req, res) => {
  res.json(bears);
});

app.post('/', (req, res) => {
  bears.push({
    id: bears.length + 1,
    name: req.body.name,
    weight: req.body.weight
  });
  res.json(bears);
});

app.post('/:id', (req, res) => {
  bears.filter(bear => {
    return bear.id == req.params.id;
  }).map(bear => {
    bear.name = req.body.name;
    bear.weight = req.body.weight;
  });
  res.json(bears);
});

app.delete('/:id', (req, res) => {
  bears = bears.filter(bear => {
    return bear.id != req.params.id
  });
  res.json(bears);
});
