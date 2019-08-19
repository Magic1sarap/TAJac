// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
// const article = require('./server/routes/api')


// Get API routes 
const api = require('./server/routes/api');
const app = express();

// Parsers for POST data 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist'))); 

// Set our API routes
app.use('/api', api);

app.get('/', function(req, res){
    res.sendFile(__dirname + './dist/index.html');
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {res.sendFile(path.join(__dirname,'dist/index.html'));
});

// Get port from environment and store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);
// server.listen(port,  () => console.log(`TAngular is running on localhost:${port}`));

MongoClient.connect('mongodb://louiy:qweasd098@ds259367.mlab.com:59367/tawebdb', 
 { useNewUrlParser: true }, (err, database) => {   
     if (err) return console.log(err)   
     db = database.db('tawebdb');   
     /**   * Listen on provided port, on all network interfaces.   */   
     server.listen(port, () => console.log(`API running on localhost:${port}`)); 
    }) 


 /**  api for /quotes to write to the MongoDB at mlab.com */ 
//  app.post('/articles', (req, res) => {  
//      db.collection('articles').insertOne(req.body, (err, result) => {     
//          if (err) return console.log(err) 
//      console.log('saved to database')     
//      res.redirect('/')   
//     });
// });






