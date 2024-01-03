const express = require('express');
const { getMessage } = require('./src/handlers/baseHandler');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const message = getMessage('Hello World! I am from Docker NodeJs app!');
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});