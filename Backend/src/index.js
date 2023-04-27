const express = require('express');
const login = require('./v1/routes/login');
const register = require('./v1/routes/register');
const app = express();
const PORT = 4200;

app.use("/api/v1", login);
app.use("/api/v1", register);

app.listen(PORT, function() {
    console.log('SERVER LISTENING ON PORT ' + PORT);
});