'use strict'

const Web3 = require('web3')
const web3 = new Web3('http://localhost:8545')
const qtumrpc = 'http://user:pass@localhost:3889'

const MetronomeContracts = require('../src')

const ROPSTEN = 'ropsten'
const QTUM = 'qtumTestnet'

const contracts = {
  mainnet: {
    Auctions: {
      address: '0x9d9BcDd249E439AAaB545F59a33812E39A8e3072',
      birthblock: 5659894
    },
    AutonomousConverter: {
      address: '0x686e5ac50D9236A9b7406791256e47feDDB26AbA'
    },
    METToken: {
      address: '0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e'
    }
  },
  ropsten: {
    Auctions: {
      address: '0x767182C6ef62398993099e5542Ab43c2456A8abA',
      birthblock: 3399250
    },
    AutonomousConverter: {
      address: '0x638E84db864AA345266e1AEE13873b860aFe82e7'
    },
    METToken: {
      address: '0xF3e9a687Fdf24112745D4d7dEe150BA87A07ecc3'
    }
  },
  qtumTestnet: {
    Auctions: {
      address: '0xB3F2D768Fb1f2e341f5fE72F1B207FADa4E51fE3'
    },
    AutonomousConverter: {
      address: '0xD27eD9A738D166a68D499B355995BebFbd7B3955'
    },
    METToken: {
      address: '0x16D74daC67aD7AF791427A00e5C687c204B733aB'
    },
    Proposals: {
      address: '0xa6Ca7eA28A78572CA06C8376555D8896f37ec6F8'
    },
    TokenPorter: {
      address: '0x4aa625D067457b6E5df52275048E70E68EA1BFF7'
    },
    Validator: {
      address: '0x39E910a1439Cc806a3dcb5F253D8Fa28a5B0C598'
    }
  }
}

test('initializes contracts with default chain', function () {
  const metronome = new MetronomeContracts(web3)

  expect(metronome.METToken)
    .toBeDefined()
  expect(metronome.Auctions)
    .toBeDefined()
  expect(metronome.AutonomousConverter)
    .toBeDefined()
})

test('initializes contracts for specific', function () {
  const metronome = new MetronomeContracts(web3, ROPSTEN)

  expect(metronome.METToken)
    .toBeDefined()
  expect(metronome.Auctions)
    .toBeDefined()
  expect(metronome.AutonomousConverter)
    .toBeDefined()
})

test('initializes contracts for qtum', function () {
  const metronome = new MetronomeContracts(web3, QTUM, qtumrpc)

  expect(metronome.METToken)
    .toBeDefined()
  expect(metronome.Auctions)
    .toBeDefined()
  expect(metronome.AutonomousConverter)
    .toBeDefined()
})

test('initializes contracts and get the addresses on qtum', function () {
  const metronome = new MetronomeContracts(web3, QTUM, qtumrpc)
  expect(metronome.METToken.info.address.toLowerCase())
    .toBe(contracts[QTUM].METToken.address.toLowerCase())
  expect(metronome.Auctions.info.address.toLowerCase())
    .toBe(contracts[QTUM].Auctions.address.toLowerCase())
  expect(metronome.AutonomousConverter.info.address.toLowerCase())
    .toBe(contracts[QTUM].AutonomousConverter.address.toLowerCase())
})

test('initializes contracts and get the addresses on Ropsten', function () {
  const metronome = new MetronomeContracts(web3, ROPSTEN)
  expect(metronome.METToken.options.address.toLowerCase())
    .toBe(contracts[ROPSTEN].METToken.address.toLowerCase())
  expect(metronome.Auctions.options.address.toLowerCase())
    .toBe(contracts[ROPSTEN].Auctions.address.toLowerCase())
  expect(metronome.AutonomousConverter.options.address.toLowerCase())
    .toBe(contracts[ROPSTEN].AutonomousConverter.address.toLowerCase())
})

test('initializes contracts and check some methods', function () {
  const metronome = new MetronomeContracts(web3, ROPSTEN)

  expect(typeof metronome.METToken.methods.transfer)
    .toBe('function')
  expect(typeof metronome.Auctions.methods.heartbeat)
    .toBe('function')
  expect(typeof metronome.AutonomousConverter.methods.convertEthToMet)
    .toBe('function')
})

test('initializes contracts with invalid chain and throw error', function () {
  try {
    new MetronomeContracts(web3, 'fakenet') // eslint-disable-line no-new
  } catch (err) {
    expect(err.message)
      .toBe('Unknown chain')
  }
})

test('check static properties as addresses and birthblocks', function () {
  expect(Object.assign({}, MetronomeContracts)).toMatchObject(contracts)
})
