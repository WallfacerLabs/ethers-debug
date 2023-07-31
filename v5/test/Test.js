const TestContract = require('../build/Test.json')
const { MockProvider, deployContract, solidity } = require('ethereum-waffle')
const chai = require('chai')

chai.use(solidity)

const expect = chai.expect

describe('Test', () => {

  it('fails', async () => {
    const provider = new MockProvider()
    const [wallet] = provider.getWallets()
    const testContract = await deployContract(wallet, TestContract, [])
    await expect(() => testContract.test()).to.be.revertedWith('Error in Test.sol')
  })
})