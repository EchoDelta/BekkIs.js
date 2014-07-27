var _ = require('lodash');

function ArticleRepository(){
    this._articles = global.articles || [
        {id: 1, name: "Mini Push Cola", price: 5.0},
        {id: 2, name: "Snickers", price: 10.0},
        {id: 3, name: "Krone-is sjokolade", price: 10.0},
        {id: 4, name: "Krone-is jordbær", price: 10.0},
        {id: 5, name: "Sandwich", price: 5.0},
        {id: 6, name: "Lollipop", price: 5.0},
        {id: 7, name: "Båt-is", price: 5.0}
    ];
};

ArticleRepository.prototype.getArticles = function() {
	return this._articles;
};

ArticleRepository.prototype.getArticle = function(id) {
    return _.first(this._articles, {'id': id})[0];
}

module.exports = ArticleRepository;