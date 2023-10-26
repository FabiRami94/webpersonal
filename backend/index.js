
require('dotenv').config();
const {PORT} = process.env;
const server = require("./src/app.js");

server.listen(PORT, () => {
    console.log('Server iniciado')
})
