var express = require('express');
var router = express.Router();


var msgs = [
    {
        id: 1,
        msg: "asd1"
    },
    {
        id: 2,
        msg: "asd2"
    },
    {
        id: 3,
        msg: "asd399"
    }
];

// var msg = ["asd1","asd2"];

// get id
// http://localhost:3000/msgs/1
router.get('/:id', function (req, res) {
    const id = req.params.id;
    let result = msgs.filter( item => item.id == id);
    res.json(result);
});

//delete all items
//http://localhost:3000/msgs/all
router.delete('/all',function(req,res){
    msgs = [];
    res.json(msgs);

});

//delete id
//http://localhost:3000/msgs/1
router.delete('/:id', function (req, res) {
    const id = req.params.id;
    msgs = msgs.filter( item => {
       return item.id != id
    });
    res.json(msgs);
});


//put id
//{"id" : 3, "msg" : "asd999"}
//http://localhost:3000/msgs/3
router.put('/:id', function (req, res) {
    const id = req.params.id;
    let changed_msg = {err :'id not found or not match' };
    msgs.map((msg) => {
        if (msg.id == id && req.body.id == id) {
            msg.msg = req.body.msg;
           return changed_msg = {id : id, msg : msg.msg };
        }
        return msg;
    });

    res.json(changed_msg);
});

// get list
// http://localhost:3000/msgs/
router.get('/', function (req, res, next) {
    res.json(msgs);
});

// post item
// http://localhost:3000/msgs/
// {"id" : 4, "msg" : "asd66"}
router.post('/', function (req, res) {

    res.json(req.body);
    msgs.push(req.body);
});



module.exports = router;
