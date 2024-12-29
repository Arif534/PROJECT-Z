const express = require('express');
const app = express();
const envConfig = require('./env-config');
const port = envConfig.port;

app.listen(port);