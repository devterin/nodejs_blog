const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.send('Welcome to Hello World!');
    var a = 10;
    var b = 20;
    var c = a + b;
    res.send(`Hello World! The sum of ${a} and ${b} is ${c}.`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});