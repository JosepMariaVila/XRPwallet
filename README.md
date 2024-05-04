# Simple-XRP-Wallet
A simple javascript XRP wallet to check the balance, send XRP, create new mainnet accounts offline and create testnet funded accounts.

It uses a seed to derive the account address and sign transactions, 2 options are possible:

Option A: 29 characters seeds (shNq9PQrYKEifmLdFs9NPgdLeyMKm) which correspond to the secp256k1 algorithm.

Option B: 31 characters seeds (sKdVVBLAmVjgcDrEfDSzTSBqsagHTEd) which correspond to the ed25519 algorithm.

Step by step guide to set up the wallet:

1) Create an empty folder in your desktop and download the 4 files.

2) Open the HTML file in your browser.

3) Select the network. It works for Mainnet, Testnet and Devnet.

4) It allows to create a Mainnet account (which has to be activated later with XRP). Do it offline, it's purely mathematical.
 
5) It allows to create a Testnet or Devent account and funds it with 100 XRP. Do it online as it's not real XRP.

6) It allows to send XRP.

You can try it here: https://skunk-proper-smoothly.ngrok-free.app/tools/simpleXRPwallet/xrpwallet
