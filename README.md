# iota_demo
Demonstration of IOTA transactions

Initially we need to have these installed:

•	Node JS (8+)
•	A code editor such as Visual Studio Code
•	Access to a command prompt
•	An Internet connection

Now cloning this repository:
```
git clone https://github.com/nisahbhtrap/iota_demo.git
cd iota_demo
npm install @iota/core @iota/converter --save
```
### Firstly, lets make some zero valued transactions:

For this we will run the send_data.js to send message into the network. We can use some random seed as no tokens are being sent. And run the script:
```
node send_data.js
```
Also, we can read the data by running the command:
```
node read_data.js
```
### Now let’s get started with valued transactions in iota:


*1) We will be creating an address first:

For this we need our seed. You can generate seed by https://iota.guide/seed/how-to-generate-iota-wallet-seed/ or using KeyPass for windows.
Once we have our seed (paste it in create_address.js) we can generate address by running this command on cmd:
```
node create_address.js
```
We will be able to find that new address in our console.
Also, we can see the current balance as 0 by running with the new address:
```
node check_balance.js
```
*2) Now let’s load some iota in this address:

For this we will be using the newly generated address and getting iota via https://faucet.devnet.iota.org/.
This allows us to have 1000i into the address(can take 1-2 min to display).
Now if we run:
```
node check_balance.js
```
we can see the balance updated to 1000 now.

*3)  We will send the balance from out address to another address.

For this we will be using the same seed used in step 1, which is loaded with 1000i and send it to new address.
using the command below:
```
node transfer_iota.js
```
Now in the console we can see the address which is going to be loaded.
We can use the address in check_balance.js
```
node check_balance.js 
```
Also, we can see for our earlier address which was loaded with 1000i will display 0 by running
```
node check_balance.js 
```
Finally, we were able to send transaction from one account to another.
We can see the entire record by running these two addresses in  https://devnet.thetangle.org

*4)  Similarly, we can run non-valued transactions in the system. 
By entering the senders seed and the receivers address, and running:
``` 
node external_transfer.js
```


