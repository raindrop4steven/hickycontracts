const PKYCoin = artifacts.require('PKYCoin');

const GAS_MINT = 90000;
const GAS_MINT_TIMELOCK = 100000;

module.exports = callback => {
    const distributionFileName = process.argv[2];
    if(distributionFileName == null) {
        console.error('Distribution file not provided');
        process.exit();
    }

    const distribution = require(process.cwd() + '/' + distributionFileName);
    PKYCoin.deployed().then(token => {
        Object.keys(distribution).map(address => {
            new Promise(() => {
                return token.mint(address, PKYCoin.web3.toWei(distribution[address]), {gas: GAS_MINT});
            })
            .then(tx => {
                if(tx.receipt.status === '0x0')
                    throw 'transaction failed';
                console.log(`Successfully minted ${distribution[address]} to ${address}`);
            })
            .catch(err => console.log(`FAILED to mint ${distribution[address]} to ${address}:`, err));
        });
    });
};