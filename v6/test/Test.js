const TestContract = require('../build/Test.json')
const ganache = require('ganache')
const {defaultAccounts} = require('./utils.js')
const { Wallet, ContractFactory, BrowserProvider } = require('ethers')


describe('Test', () => {
  it('fails', async () => {
    const ganacheobj = ganache.provider({ wallet: { accounts: defaultAccounts }, logging: { quiet: true}})
    const provider = new BrowserProvider(ganacheobj)
    const wallet = new Wallet(defaultAccounts[0].secretKey, provider)
    const factory = new ContractFactory(TestContract.abi, TestContract.bytecode, wallet)
    const testContract = await factory.deploy()
    const tx = await testContract.test({ gasLimit: 999999 })
    await tx.wait()
  }).timeout(2000000)

})
