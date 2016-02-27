var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'API KEY',
  'apiSecret': 'API SECRET',
  'baseApiUri': 'https://api.sandbox.coinbase.com/v2/',
  'tokenUri': 'https://api.sandbox.coinbase.com/oauth/token'
});