let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');

let api = require('./routes/api');


app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname+'/client'));
app.use('/api', api);

app.listen(3000);
console.log('Running on port 3000...');

module.exports = app;
