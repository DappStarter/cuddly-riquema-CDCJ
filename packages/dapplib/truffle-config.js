require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name rice place concert grace help equal ghost'; 
let testAccounts = [
"0x1e5dedc395e053b60f91534059e7bd195300197a83f6291835d9f29765eff69b",
"0xcc363d1295a20392760a9ba9f1a3a285a2bad681bc31788e59044f21b2132521",
"0x7fdab960eb9ae0a59e13161bb50048c13a3899e03f81797b288317bacf75761f",
"0xcd692d3aae94e940d334e012f390011382d900355ca3094171c8bee966d1029d",
"0x3bd6604ccee3cde727d4022dd593c55f6139c22516be453be901c6096ce2198c",
"0x38cf29982e27118eb576ec94373a8121783ddb2b3cecc52c169e1ccba18e8dcb",
"0xc90fc7cd0474a307d94e2e7bc1d677072f59278868805d00a1e920e89755ed6a",
"0x0d3db9d6020e1a6ad5be461f48e98475f781212d4597fb61b0558e2c8ddb7299",
"0xc97a2339e368bfd2f2211d320f0da948cd61296f6c12ef55f994469dbbe6e76d",
"0xb577d681fc32015dbbbbbde1545aa847fe27c3c0603570a343ba97d68e987c16"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


