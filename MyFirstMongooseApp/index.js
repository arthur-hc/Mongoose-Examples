const express = require('express');
require('./config/connection')('localhost/cards');

const app = express()
const port = 3000;

app.use(express.json());

app.use('/cards', require('./router/cards'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));