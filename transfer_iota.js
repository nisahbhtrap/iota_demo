const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

// Replace this with the seed you sent tokens too!
const seed =
  'MAKEYOUROWNTRYETSHEHEHHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHLOLLOLOMINEISNOTAONERANDOM'

// Create a wrapping function so we can use async/await
const main = async () => {
  // Generate a different address from your seed
  const receivingAddress = await iota.getNewAddress(seed, {
    index: 1,
    total: 1
  })

  // Construct a TX to our new address
  const transfers = [
    {
      value: 500,
      address: receivingAddress[0],
      tag: 'TRANSFERING'
    }
  ]
  console.log('Sending iota to ' + receivingAddress)

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