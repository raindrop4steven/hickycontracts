pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";


contract SampleCrowdsaleToken is MintableToken {
  string public constant name = "Picky Dapp Token";
  string public constant symbol = "PKY";
  uint8 public constant decimals = 18;
}


contract SampleCrowdsale is CappedCrowdsale {

  function SampleCrowdsale(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet) public
    CappedCrowdsale(36000 ether)
    Crowdsale(_startTime, _endTime, _rate, _wallet)
  {
  }

  function createTokenContract() internal returns (MintableToken) {
    return new SampleCrowdsaleToken();
  }
}