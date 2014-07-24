var ArticleCollection = require("../models/articleCollection");
var ArticlesView = Backbone.View.extend({
    initialize: function(){
        this.articles = new ArticleCollection();
        this.articles.add({name: "Krone-is", price: 10.0});
        this.articles.add({name: "Mini push cola", price: 5.0});
        this.articles.add({name: "Sandwich", price: 5.0});
        this.articles.add({name: "Snickers-is", price: 10.0});
        this.render();
    },
    render: function() {
        console.log(this.articles.toJSON());
        var template = templates['./templates/articles.hbs']({articles: this.articles.toJSON()});
        console.log(this.$el);
        
        this.$el.html(template);
    }
});

module.exports = ArticlesView;