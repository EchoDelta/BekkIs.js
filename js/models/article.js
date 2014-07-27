var Article = Backbone.Model.extend({
    defaults: {
        name: '',
        price: 0.0
    }
});

Article.prototype.buy = function(){
    $.ajax('/api/articles/'+this.get('id')+'/buy/', {
        type: 'PUT'
    });
}

module.exports = Article;