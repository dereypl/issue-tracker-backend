const express = require("express");
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require("mongoose");
const routes = require("./routes/v1");
const {errorHandler} = require("./middleware/error");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1', routes);

app.use((req, res) => {
    res.status(404).json({
        message: 'Not found'
    })
});

app.use(errorHandler);

mongoose.connect(process.env.DATABASE_URL).then(async () => {
    app.listen(process.env.PORT, () => console.log(`Server is up and running on port: ${process.env.PORT}`))
});

