
class Transaction {
	constructor(newStore, newAmount, newDate) {
		this.store = newStore;
		this.amount = newAmount;
		this.date = newDate;
	}

	getStore() {
		return this.store;
	}

	setStore(store) {
		this.store = store;
	}

	getAmount() {
		return this.amount;
	}

	setAmount(amount) {
		this.amount = amount;
	}

	getDate() {
		return this.date;
	}

	setDate(date) {
		this.date = date;
	}
}

/*
function Transaction(newStore, newAmount, newDate) {
	this._store = newStore;
	this._amount = newAmount;
	this._date = newDate;
}

Transaction.prototype = {
	_store: '',
	_amount: '',
	_date: 0,

	constructor: Transaction,

	getStore: function() {
		return this._store;
	},
	setStore: function(store) {
		this._store = store;
	},
	getAmount: function() {
		return this._amount;
	},
	setAmount: function(amount) {
		this._amount = amount;
	},
	getDate: function() {
		return this._date;
	},
	setDate: function(date) {
		this._date = date;
	}
};
*/