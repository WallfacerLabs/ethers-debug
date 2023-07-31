const TestContract = require('../build/Test.json')
const {defaultAccounts} = require('./utils.js')
const { Wallet, ContractFactory } = require('ethers')
const { GanacheProvider } = require('@ethers-ext/provider-ganache')


describe('Test', () => {
  it('fails', async () => {
    const provider = new GanacheProvider()
    
    const wallet = new Wallet(defaultAccounts[0].secretKey, provider)
    
    await provider.setAccount(wallet.address, defaultAccounts[0].balance)
    const factory = new ContractFactory(TestContract.abi, TestContract.bytecode, wallet)
    const testContract = await factory.deploy()
    // const tx = await testContract.test({ gasLimit: 999999 })
    // await tx.wait()
  }).timeout(2000000)

})
