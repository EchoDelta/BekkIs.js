var Account = require('../models/account');

var BalanceView = Backbone.View.extend({
    initialize: function(){
        this.template = this.template = templates['./templates/balance.hbs'];
        this.account = new Account();
        this.account.on('change', this.render, this);

        this.updateBalance();
        Backbone.on('article:buy', this.updateBalance, this);
    },
    updateBalance: function(){
        this.account.fetch()
    },
    render: function(){
        this.$el.html(this.template({balance: this.account.get("balance")}));
    }
});

module.exports = BalanceView;