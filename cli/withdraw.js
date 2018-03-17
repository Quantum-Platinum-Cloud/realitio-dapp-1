const rc_common = require('./rc_common.js');

rc_common.checkArgumentLength(5, 'Usage: node withdraw.js <nonce> <gas_price_in_gwei> <address>');

const addr = rc_common.sanitizeAddress(process.argv[4]);

const params = rc_common.commonParams(process.argv);
console.log(params);
console.log('Generating a transaction to withdraw funds from the arbitrator contract to ' + addr);

const arb = rc_common.arbContract();
const req = arb.withdraw.request(addr);
const data = req.params[0].data;

const stx = rc_common.serializedTX(params, arb, data);

console.log(stx.toString('hex'));

