const express = require('express');
const server = express();
const requests = require('./controllers/requests');
const cors = require('cors');


server.use(cors());


server.get('/api/config', requests.getConfiguration);
//server.post('/api/config', requests.postConfiguration);



server.listen(5000, () => console.log('Server listening on port 5000'));