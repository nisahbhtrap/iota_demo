const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'CQOW9INYEQHBOHTYHCU9CQJBW9WTRGCTNAOVZTWEEZLCFSHJCBGOLXTBULHCVADQYICBNPPOZGC9SHRWY'

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
