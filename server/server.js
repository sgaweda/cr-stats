const express = require('express');
const cors = require('cors') // for testing
const path = require('path')
const bodyParser = require('body-parser')
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
    // app.use defines new express middleware
    next();
})

app.get('/test', (req, res) => {
    res.send({body: 'success'})
});

app.get('/about', (req, res) => {
    res.send('about')
})

app.get('/home', (req, res) => {
    res.send('home')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(8080, () => {
    console.log('Server is up on http://localhost:8080/');
});