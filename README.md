# XRPWallet
An XRP wallet to check the balance, send XRP, create new mainnet accounts offline and create testnet funded accounts.

It uses a seed to derive the account address and sign transactions, 2 options are possible:

Option A: 29 characters seeds (suNq9PQrYKEifmLdFs9NPjdLeyMKm) which correspond to the secp256k1 algorithm.

Option B: 31 characters seeds (sKdNVBLAmVjgcDrEfDSzTSBqsagHMEd) which correspond to the ed25519 algorithm.

Step by step guide to set up the wallet:

1) Create an empty folder in your desktop and download the 4 files.

2) Open the HTML file in your browser.

3) Select the network. It works for Mainnet, Testnet and Devnet.

4) It allows to create a Mainnet account (which has to be activated later with XRP). Do it offline, it's purely mathematical.
 
5) It allows to create a Testnet or Devent account and funds it with 100 XRP. Do it online as it's not real XRP.

6) It allows to send XRP. Warning: if you sign and send a transaction in the same computer, as it has internet conection, we can consider the private key compromised once broadcasted the transaction. So, each time you send XRP using this wallet you should generate a new keyparir using a computer that never is connected to the internet and send your XRP there.

Demo online just for educational purposes here: 
https://skunk-proper-smoothly.ngrok-free.app/tools/simpleXRPwallet/xrpwallet
