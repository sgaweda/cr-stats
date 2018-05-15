const express = require('express');

const app = express();

app.use((req, res, next) => {
    // app.use defines new express middleware
    next();
})

app.get('/', (req, res) => {
    res.send('success')
});

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/home', (req, res) => {
    res.send('home')
})

app.listen(3000, () => {
    console.log('Server is up');
});