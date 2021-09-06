const express = require('express');
const server = express();
const requests = require('./controllers/requests');

server.get('/api/config', requests.getConfiguration);
//server.post('/api/config', requests.postConfiguration);

server.listen(5000, () => console.log('Server listening on port 5000'));