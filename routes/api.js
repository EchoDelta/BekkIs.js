var express = require('express');
var router = express.Router();
var ArticleRepository = require('../repositories/articleRepository.js');

router.get('/articles/', function(req, res){
    var articleRepository = new ArticleRepository();
    res.json(articleRepository.getArticles());
});

module.exports = router;