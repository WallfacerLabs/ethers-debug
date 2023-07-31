pragma solidity ^0.8.15;

contract Test {
  uint256 public dupa;
  constructor() {

  }
  
  function test() public {
    revert('Error in Test.sol');
    dupa = 10;
  }
}
