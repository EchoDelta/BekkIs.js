var ArticleView = Backbone.View.extend({
    tagName: 'article',
    initialize: function(){
        this.template = templates['./templates/article.hbs'];
        this.render();
    },
    events: {
        'click .buy-button': 'buyArticle'
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    buyArticle: function(){
        this.model.buy();
        Backbone.trigger('article:buy');
    }
});

module.exports = ArticleView;