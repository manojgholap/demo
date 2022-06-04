require('dotenv').config({ path: "./.env" })
const express = require('express');
var compression = require('compression');
const cors = require('cors');
const app = express();

const PORT = 3400
app.set('view engine', 'ejs');
app.use(cors());
app.use(compression())
app.use(express.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 90000 }));

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.listen(PORT, () => {
    console.log(`app is starting on port ${PORT}`);
})