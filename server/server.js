const express = require('express');
const cors = require('cors') // for testing
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const baseUrl = require('./api.json').baseUrl
const apiToken = require('./keys/keys.json').devToken
const axios = require('axios')
const admin = require('firebase-admin');

const serviceAccount = require('./keys/cr-stats-b45c0-9003a1a0d2d8.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const config = {
    headers: {
        authorization: `Bearer ${apiToken}`
    }
}

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.use(bodyParser.json());
app.use(cors())

app.use((req, res, next) => {
    // app.use defines new express middleware
    next();
})

app.get('/api/test', (req, res) => {
    console.log(req.query)
    const tag = req.query.tag
    axios.get(`${baseUrl}/players/%23${tag}`, config).then(response => {
        const playerDoc = db.collection('users').doc(tag);

        const setPlayer = playerDoc.set(response.data)

        setPlayer.then(x => console.log('success'))
            .catch(x => console.log('fail: ' + x))
        res.send({body: response.data})
    }).catch(err => res.send({body: 'error'}))
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