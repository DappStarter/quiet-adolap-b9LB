require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stock rate sad method ice light army gauge'; 
let testAccounts = [
"0x05772638ca044502b59e3b8ed10b6987ea63169428d51b2a33cd5bf12d5b0b37",
"0x4be5aeabc87951600b9b9c0d3575e074a9f46750217e9ded8e0e5081275f9650",
"0x186cb8fd3cd55a6818699191be6f38406ac0836477494ebaf3e832152365dd43",
"0xf8a1bcdac114b278c2c749bd1659d1d00bb5fc21f50c11dd80e4080488b9a37e",
"0xe4d737efa38a11c12dd2bfbf7ab3b6c12e9b8a67bd1f439fcae6df56e2650968",
"0x15b30327afb3034a6ab8b29046d2b73620fab957eb89a83e00e62751909674ad",
"0x5aa6c9ef2420bb5915d61f1c479a233ce6095b41b2a011638ad61f743967e470",
"0xc2248a39120907305a5adf0880c109cdfbbd1487a192a09ab8becaf8ed2821e3",
"0x00767134bbfce286843621f11a7da6d1291154cb4a0e25e167c6ec322cf36134",
"0x0d05a13ee4cae85b1b08c45fd59f0517f264eab79fa7c4fd7f6ff1b1b60566f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

