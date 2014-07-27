var Article = require('./article.js');
module.exports = Backbone.Collection.extend({
    url: '/api/articles',
    model: Article
});