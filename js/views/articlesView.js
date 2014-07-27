var ArticleCollection = require("../models/articleCollection");
var ArticleView = require("./articleView");

var ArticlesView = Backbone.View.extend({
    initialize: function(){
        this.template = templates['./templates/articles.hbs'];
        this.articles = new ArticleCollection();
        this.articles.on('reset', this.render, this);
        this.articles.fetch({reset: true});
        this.render();
    },
    render: function() {
        var element = this.$el;
        this.articles.each(function(article){
            var articleView = new ArticleView({ model: article });
            element.append(articleView.el);
        });
    }
});

module.exports = ArticlesView;