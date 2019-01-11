<h1 align="center">
  <img src="./logo.png" alt="Metronome Contracts JS" width="50%">
</h1>

🔌  [Web3](https://github.com/ethereum/web3.js) Contracts for [Metronome Token](http://metronome.io) ready to be used.

[![Build Status](https://travis-ci.org/autonomoussoftware/metronome-contracts-js.svg?branch=master)](https://travis-ci.org/autonomoussoftware/metronome-contracts-js)
[![Code Style](https://img.shields.io/badge/code%20style-bloq-0063a6.svg)](https://github.com/bloq/eslint-config-bloq)
[![Known Vulnerabilities](https://snyk.io/test/github/autonomoussoftware/metronome-contracts-js/badge.svg?targetFile=package.json)](https://snyk.io/test/github/autonomoussoftware/metronome-contracts-js)

## Install

```shell
npm install --save metronome-contracts
```

## Usage

```js
const Web3 = require('web3')
const MetronomeContracts = require('metronome-contracts')

const web3 = new Web3('http://localhost:8545')
const metronomeContracts = new MetronomeContracts(web3, 'mainnet')

metronomeContracts.METToken.methods.balanceOf(address).then(console.log)
```

## API

### `MetronomeContracts(web3, chain)`

Constructor for the Metronome contracts object.
It shall receive a `web3` instance and an optional `chain` parameter that default to `'mainnet'`.
Other supported chains are: `'ropsten'`.
Numeric chain IDs can also be used.

### `metronomeContracts.{contractName}`

The instance of the Metronome contracts will have a property for each contract: `Auctions`, `AutonomousConverter`, `METToken`, `TokenPorter` and `Validator`.
Each contract is an instance of `web3.eth.Contract`.

### `MetronomeContracts.{chain}.{contractName}`

This is a convenience object containing the `address` and the `abi` of the contract for the specified chain.

## Contracts API

  - [`Auctions`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#auction-api)
  - [`Autonomous Converter`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#autonomous-converter-contract-api)
  - [`METToken`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#token-api)
  - [`TokenPorter`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#tokenporter-api)
  - [`Validator`](https://github.com/autonomoussoftware/documentation/blob/master/owners_manual/owners_manual.md#validator-api)

## License

[MIT](https://github.com/autonomoussoftware/metronome-contracts-js/blob/master/LICENSE)
