
require('dotenv').config();
const {PORT} = process.env;

const express = require('express');
const server = express();



server.listen(PORT, () => {
    console.log('Server iniciado')
})
