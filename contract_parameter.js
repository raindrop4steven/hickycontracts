const BigNumber = web3.BigNumber;

const
    START_TIME = new Date(Date.UTC(2018,01,17,10,00,00)).getTime()/1000|0;

module.exprots = (PKYCoin) => {
    startTime: START_TIME,
    endTime: START_TIME + 30 *60*60*24,
    rate: BigNumber(7500),
    wallet: '0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c'
}
