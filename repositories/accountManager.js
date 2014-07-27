var AccountManager = function () {
    this._balance = global.accountBalance || 0;
};

AccountManager.prototype.getBalance = function () {
    return this._balance;
};

AccountManager.prototype.purchaseArticle = function (article) {
    this._balance = this._balance - article.price;
}

AccountManager.prototype.save = function () {
    global.accountBalance = this._balance;
};

module.exports = AccountManager;