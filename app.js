var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'API KEY',
  'apiSecret': 'API SECRET',
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


// refresh the account
client.getAccount(primaryAccount.id, function(err, acct) {
  console.log(acct.name + ': ' + acct.balance.amount + ' ' + acct.balance.currency);
});