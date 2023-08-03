const TestContract = require('../build/Test.json')
const { MockProvider, deployContract, solidity } = require('ethereum-waffle')
const { ContractFactory } = require('ethers')
const chai = require('chai')

chai.use(solidity)

const expect = chai.expect

describe('Test', () => {

  it('fails', async () => {
    const provider = new MockProvider()
    const [wallet] = provider.getWallets()
    const testContractFactory = new ContractFactory(TestContract.abi, TestContract.bytecode, wallet)
    const testContract = await testContractFactory.deploy()
    await testContract.test({ gasLimit: 999999 })
    // await expect(() => testContract.test({ gasLimit: 999999 })).to.be.revertedWith('Error in Test.sol')
  })
})