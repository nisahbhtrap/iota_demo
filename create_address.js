const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const seed =
  'MAKEYOUROWNTRYETSHEHEHHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHEHLOLLOLOMINEISTOTATWORANDOM'
                                                                
iota
  .getNewAddress(seed, { index: 0, total: 1 })
  .then(address => {
    console.log('Your address is: ' + address)
  })
  .catch(err => {
    console.log(err)
  })
