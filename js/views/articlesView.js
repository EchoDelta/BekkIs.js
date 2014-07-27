var ArticleCollection = require("../models/articleCollection");
var ArticlesView = Backbone.View.extend({
    initialize: function(){
        this.template = templates['./templates/articles.hbs'];
        this.articles = new ArticleCollection();
        this.articles.on('reset', this.render, this);
        this.articles.fetch({reset: true});
        this.render();
    },
    render: function() {
        this.$el.html(this.template({articles: this.articles.toJSON()}));
    }
});

module.exports = ArticlesView;