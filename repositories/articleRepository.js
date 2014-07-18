function ArticleRepository(){

};

ArticleRepository.prototype.getArticles = function() {
	return [
		{name: "Mini Push Cola", price: 5.0},
		{name: "Snickers", price: 10.0},
		{name: "Krone-is sjokolade", price: 10.0},
		{name: "Krone-is jordbær", price: 10.0},
		{name: "Sandwich", price: 5.0},
		{name: "Lollipop", price: 5.0},
		{name: "Båt-is", price: 5.0}
	];
};

module.exports = ArticleRepository;