const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const APP_PORT = 3000;
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.get("/", function (req, res) {
    res.send("hello")
});

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Not found'
    })
});

app.listen(APP_PORT, function () {
    console.log(`Server is up and running on port: ${APP_PORT}`);
})
