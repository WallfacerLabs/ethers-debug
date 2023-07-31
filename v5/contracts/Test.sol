pragma solidity ^0.8.15;

contract Test {
  uint256 public randomVar;
  constructor() {

  }
  
  function test() public {
    revert('Error in Test.sol');
    randomVar = 10;
  }
}
