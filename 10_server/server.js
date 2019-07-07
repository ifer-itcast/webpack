const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    res.send({
        name: 'ifer',
        age: 18
    });
});

app.listen(3001);