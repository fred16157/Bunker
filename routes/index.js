var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

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

router.get('/download/:id', function(req, res) {
  var file = req.params.id;
  var filepath = path.join(__dirname, '../storage/' + file);
  res.download(filepath);
});

router.get('/delete/:id', function(req, res) {
  var file = req.params.id;
  fs.unlinkSync(path.join(__dirname, "../storage/" + file));
  res.redirect('/');
});

module.exports = router;
