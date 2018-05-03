'use strict'

const metToken = require('./contracts/METToken')
const auctions = require('./contracts/Auctions')
const autonomousConverter = require('./contracts/AutonomousConverter')

const metTokenAddress = '0xe0df19e55ebbbe076c3e393ff5d0418a2a0de5f8'
const auctionsAddress = '0x7e25f34e0f16059bea3ffae7d6545c04896cced2'
const autonomousConverterAddress = '0x6d0cb3142e66f5f3cf196b1df32082bf5f3325d3'

class Metronome {
  constructor (web3) {
    return {
      metToken: new web3.eth.Contract(metToken.abi, metTokenAddress),
      auctions: new web3.eth.Contract(auctions.abi, auctionsAddress),
      autonomousConverter: new web3.eth.Contract(autonomousConverter.abi, autonomousConverterAddress)
    }
  }
}

Metronome.MET_TOKEN_ADDRESS = metTokenAddress
Metronome.AUCTIONS_ADDRESS = auctionsAddress
Metronome.AUTONOMOUS_CONVERTER_ADDRESS = autonomousConverterAddress

module.exports = Metronome
