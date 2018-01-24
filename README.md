PKY Coin Smart Contract
========================

### Dependencies
```
npm install
```


### Deploy

First, compile the contract:
```
npm run compile
```

to deploy the contract on the Ropsten testnet, run:
```
npm run deploy-ropsten
```


### Minting

To mint tokens, prepare a JSON file `distribution.json`. For example:
```json
{
  "0x6F81952fED482AED5E2f4a60B2316d116364B5a2": 1.23,
  "0xcf58dec6a9e3b2d0912bebc31883a2baa4840b87": 0.000000000000000001,
  "0x029A34086b8A478c91133567049a2610eF60d6a6": 20.20
}
```

Then run minting on the Ropsten testnet:
```
npm run mint-ropsten distribution.json
```

### Finish minting

On the Ropsten testnet:
```
npm run finish-ropsten
```
