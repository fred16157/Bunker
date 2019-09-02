var express = require('express');
var router = express.Router();
var fs = require('fs');

function GetStorageInfo() {
  var files = fs.readdirSync('storage/');
  for(var i in files)
  {
    console.log(files[i]);
  }
  return files;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var sdata = GetStorageInfo();
  res.render('index', { title: '이게 벙커냐', data: sdata });
});

module.exports = router;
