express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index', {id:'58'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));