const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('John Deere')

})

app.listen(3000, () => {

console.log("O servidor está escutando na porta 3000")

})