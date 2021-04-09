const express = require('express');
const app = express()

app.get('/', (req, res) => res.send('Hola DaniCraft!!! YOUTUBE'));

app.listen(3000, () => {
    console.log('REST API para D.S.S. || Running on port 3000!!')
})