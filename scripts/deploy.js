const PKYCoin = artifacts.require('PKYCoin');

module.exports = callback => {
    const checkNetwork = new Promise((resolve, reject) => {
        PKYCoin.web3.version.getNetwork((err, network) => {
            if (err) {
                reject(err);
                return;
            }

            if (artifacts.options.network_id !== '*' && artifacts.options.network_id !== Number(network)) {
                reject(new Error(`Network ${network} is not supported`));
                return;
            }

            resolve(network);
        });
    });

    checkNetwork
        .then(network => {
            const cParameters = require(process.cwd() + '/contract_parameter.js');

            return PKYCoin.new(cParameters.startTime, cParameters.endTime, cParameters.rate, cParameters.wallet)
                .then(token => {
                    PKYCoin.address = token.address;
                    artifacts.options.artifactor.save(PKYCoin);
                    console.log(`Successfully deployed to the network ${network}, address ${token.address}`)
                });
        })
        .catch(callback);
};