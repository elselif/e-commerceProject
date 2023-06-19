const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database/db');

app.use(express.json());
app.use(cors());

connection();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));