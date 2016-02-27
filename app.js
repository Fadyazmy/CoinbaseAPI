var Client = require('coinbase').Client;
//var client = new Client({'apiKey': mykey, 'apiSecret': mysecret});

var client = new Client({
  'apiKey': '',
  'apiSecret': '',
  'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});


client.getAccounts({}, function(err, accounts) {
  accounts.forEach(function(acct) {
    console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
    acct.getTransactions(null, function(err, txns) {
      txns.forEach(function(txn) {
        console.log('txn: ' + txn.id);
      });
    });
  });
});



//Dummy sender email
var args = {
  "to": "user1@example.com",
  "amount": "1.000",
  "currency": "CAD",
  "description": "Sample transaction for Bitcoin event"
};
account.sendMoney(args, function(err, txn) {
  console.log('my txn id is: ' + txn.id);
});