const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const log = require('simple-node-logger').createSimpleLogger();

const PORT = process.env.PORT || 3000;
//const config = {
  //  name: 'sample-express-app',
    //port: 5000,
    //host: '0.0.0.0',
//};

const app = express();
//const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('test');
    console.log('%s', req);
    next();
});

//app.listen(config.port, config.host, (e)=> {
    app.listen(PORT, () => {  
    console.log('Server ssssss running on port %d', PORT);

    //if(e) {
     //   throw new Error('Internal Server Error');
    //}
    //logger.info(`${config.name} running on ${config.host}:${config.port}`);
});