const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Replace this with the seed you sent tokens too!
const seed =
  'MAKEYOUROWNTRYETSHEHEHHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHLOLLOLOMINEISTOTATWORANDOM'

// Create a wrapping function so we can use async/await
const main = async () => {
  // Construct a TX to our new address
    const transfers = [
    {
        value: 500,
        address: 'CQOW9INYEQHBOHTYHCU9CQJBW9WTRGCTNAOVZTWEEZLCFSHJCBGOLXTBULHCVADQYICBNPPOZGC9SHRWY',
        tag: 'TRANSFERING'
    }
    ]
  console.log('Sending iota')

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 3, 9)

    console.log('Completed TXs')
    response.map(tx => console.log(tx))
  } catch (e) {
    console.log(e)
  }
}

main()