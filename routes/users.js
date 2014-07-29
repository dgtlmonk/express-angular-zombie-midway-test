var express = require('express'),
    router = express.Router(),
    tmpData = {
            "data" : {
               1: {
                    "name":"joel",
                    "gender":"male"
                },
                2: {
                    "name":"bernadette",
                    "gender": "female"
                }
            }
    }


/* GET users listing. */
router.get('/', function(req, res) {
  res.send(tmpData);
});

module.exports = router;
