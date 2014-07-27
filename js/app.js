var ArticlesView = require("./views/articlesView");
var BalanceView = require("./views/balanceView");
$(function(){
    var balanceView = new BalanceView({el: $("#balance")});
    var articlesView = new ArticlesView({el: $("#app")});
});