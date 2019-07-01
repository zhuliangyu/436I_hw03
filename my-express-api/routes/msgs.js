var express = require('express');
var router = express.Router();


// var msgs = [
//     {
//         id: 1,
//         msg: "asd1"
//     },
//     {
//         id: 2,
//         msg: "asd2"
//     },
//     {
//         id: 3,
//         msg: "asd399"
//     }
// ];


const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox-ytuam.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {useNewUrlParser: true});

let collection;

client.connect(err => {
    if (err) {
        console.log("Connection DB error");
        return
    }

    collection = client.db("test").collection("msgs")
});

//initial database when it is empty
// it will add 3 items
// http://localhost:3000/msgs/reset
router.get('/reset', function (req, res) {

    // 0. reset db
    const new_JSON = [{"msg": "asd1"}, {"msg": "asd2"}, {"msg": "asd3"}];
    collection.insertMany(
        new_JSON,
        function (error, response) {
            if (error) {
                console.log('Error occurred while initializing db');
            } else {
                console.log("Success while initializing db");
                console.log(response.ops);
                res.json(response.ops);
            }
        });
});


// get one item based on id
// http://localhost:3000/msgs/1
router.get('/:id', function (req, res) {
    const id = req.params.id;
    var ObjectId = require('mongodb').ObjectID;

    // let result = msgs.filter(item => item.id == id);
    // res.json(result);

    collection.find({"_id": new ObjectId(id)}).toArray(function (error, results) {
        if (error) {
            console.log('Error occurred while get:/id');
        } else {
            res.json(results);
        }
    });

});

//delete all items
//http://localhost:3000/msgs/all
router.delete('/all', function (req, res) {
    // msgs = [];
    // res.json(msgs);

    collection.remove({}, function (error, response) {
        if (error) {
            console.log('Error occurred while deleting all');
        } else {
            console.log('Success for deleting all');
        }
    });

});

//delete id
//http://localhost:3000/msgs/1
router.delete('/:id', function (req, res) {
    const id = req.params.id;
    // msgs = msgs.filter(item => {
    //     return item.id != id
    // });
    // res.json(msgs);

    var ObjectId = require('mongodb').ObjectID;

    // 5. delete
    collection.deleteOne({"_id": new ObjectId(id)}, function (error, response) {
        if (error) {
            console.log('Error occurred while deleting');
        } else {
            console.log('Success for deleting');
            res.send(id);
        }
    });
});


//put id
//{"id" : 3, "msg" : "asd999"}
//http://localhost:3000/msgs/3
router.put('/:id', function (req, res) {

    const param_id = req.params.id;

    var ObjectId = require('mongodb').ObjectID;

    collection.updateOne({"_id": new ObjectId(param_id)}, {
        $set: {
            // "id": req.body.id,
            "msg": req.body.msg
        }
    }, function (error, response) {
        if (error) {
            console.log('Error occurred while updating');
        } else {
            console.log('Success for updating');
            console.log({_id: param_id, msg: req.body.msg});
            res.json({_id: param_id, msg: req.body.msg})

        }
    });

});

// get list
// http://localhost:3000/msgs/
router.get('/', function (req, res, next) {

    collection.find().toArray(function (error, results) {
        if (error) {
            console.log('Error occurred while get:/all');
        } else {
            res.json(results);
        }
    });
});

// post item
// http://localhost:3000/msgs/
// {"id" : 4, "msg" : "asd66"}
router.post('/', function (req, res) {

    const new_JSON = req.body;

    collection.insertOne(new_JSON, function (error, response) {
        if (error) {
            console.log('Error occurred while inserting');
        } else {
            console.log('inserted record', response.ops[0]);
            res.json(response.ops[0]);
        }

    });
});


module.exports = router;
