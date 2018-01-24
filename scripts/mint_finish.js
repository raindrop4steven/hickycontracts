const PKYCoin = artifacts.require('PKYCoin');

const GAS_FINISH = 50000;

module.exports = () => {
    PKYCoin.deployed().then(token => {
        token.finishMinting({gas: GAS_FINISH})
            .then(tx => {
                if(tx.receipt.status === '0x0')
                    throw 'transaction failed';
                console.log('Minting has been finished');
            })
            .catch(err => console.log('FAILED to finish minting:', err));
    });
};