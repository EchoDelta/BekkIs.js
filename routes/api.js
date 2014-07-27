var express = require('express');
var router = express.Router();
var ArticleRepository = require('../repositories/articleRepository.js');
var AccountManager = require('../repositories/accountManager.js');

router.get('/articles/', function(req, res){
    var articleRepository = new ArticleRepository();
    res.json(articleRepository.getArticles());
});
router.put('/articles/:id/buy', function (req, res){
    var articleRepository = new ArticleRepository();
    var accountManager = new AccountManager();
    var article = articleRepository.getArticle(parseInt(req.params.id,10));
    if(article){
        accountManager.purchaseArticle(article);
        accountManager.save();
        res.send(200);
    }
    else {
        res.send(400);
    }
});

router.get('/account/', function(req, res){
    var accountManager = new AccountManager();
    res.json({balance: accountManager.getBalance()});
});

module.exports = router;