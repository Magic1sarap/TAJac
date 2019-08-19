const express = require('express');
const router = express.Router();
var path = require('path');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;



// declare axios for making http requests 
var clientId = 'xakZxaZTCmu3qkVlPt5DSA';
var clientSecrect = 'm01J3u8KTbMdO1tRDs37HhVTy-B9M9Y1X0aZ6ESDHpA';
var url = 'http://ssg.apps.deskera.com/rest/v1/company/token?clientid=' + clientId + '&clientsecret=' + clientSecrect;
var accessToken = router.get('/auth', function (req, res) {
    'http://ssg.apps.deskera.com/rest/v1/company/token?clientid=' + clientId + '&clientsecret=' + clientSecrect;
    res.json({ "status": true, "url": url });
})
console.log(url)


// router.get('/auth', function(req, res) {

//     clientId = 'mmp5u0eyn2nlmv8uw7L4sQJn15Ia';
//     callback = 'https://lifely.themlnoobies.com/callback';
//     url = 'https://api.ocbc.com/ocbcauthentication/api/oauth2/authorize?client_id='+clientId+'&redirect_uri='+callback+'&scope=transactional'
//     res.json({"status": true, "url": url});


//   });

const API = 'https://ssg.crm.deskera.com/rest/v1/master/account?request={"cdomain":"eventdemo","userName":"admin"}&token=' + accessToken;



/* GET api listing. */

var db;
MongoClient.connect('mongodb://louiy:qweasd098@ds259367.mlab.com:59367/tawebdb',
    { useNewUrlParser: true }, (err, database) => {
        if (err) return console.log(err)
        db = database.db('tawebdb');
    });



//Article Service Api
router.get('/articles', (req, res) => {
    db.collection('articles').find().toArray((err, results) => {
        if (err) throw err;
        res.send(results)
    });
});

router.get('/getArticlebyId/:header', (req, res) => {
    db.collection('articles').find({ 'header': req.params.header }).toArray((err, results) => {
        res.send(results.data)

    });
});

router.post('/articles/add', (req, res) => {
    const { header, text, tag, image } = req.body;

    if (header && text && tag && image) {

        const article = {
            header,
            text,
            tag,
            image
        };

        db.collection("articles").insertOne(article, (err, results) => {
            res.send(results);
            console.log('Posted article');
        });
    }
    else {
        res.send('please put in all parameters');
    }

});

router.delete('/articles/delete/:id', (req, res) => {
    console.log(req.params.id);

    const myquery = { _id: ObjectId(req.params.id) };
    db.collection("articles").deleteOne(myquery, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

router.route('/articles/update/').put(function(req, res) {
  var data = req.body;

  console.log(' header: ' + data.header + " id "+data.id);
  console.log(' Image: ' + data.image )
  
        db.collection("articles").updateOne({"_id":data.id}, {$set:{
            "tag":data.tag,
            "header":data.header,
            "text":data.text,
            "image":data.image,
        }});
});
 




// router.route('/articles/update').put(function(req, res) {

//     db.collection('articles').updateOne(
//         {"header": req.params.header,
//         "text": req.params.text,
//         "tag": req.params.tag },
//     (err, result) => {
//         res.send('yay')
//     });
// });


// router.put('/:id/update', (req, res) {
//     db.collection('articles').findByIdAndUpdate(req.params.id, {$set: req.body},
//         function (err, article) {
//             if (err) return next(err);
//             res.send('Product updated')
//         })
// })

// router.put('/:id/update', )



module.exports = router;