var Account = require('../models/account');

var BalanceView = Backbone.View.extend({
    initialize: function(){
        this.account = new Account();
        this.account.on('change', this.render, this);

        this.updateBalance();
        Backbone.on('article:buy', this.updateBalance, this);
    },
    updateBalance: function(){
        this.account.fetch()
    },
    render: function(){
        this.$el.text(this.account.get("balance"));
    }
});

module.exports = BalanceView;