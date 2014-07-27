function ArticleRepository(){
    global.articles = global.articles || [
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
	return global.articles;
};

module.exports = ArticleRepository;