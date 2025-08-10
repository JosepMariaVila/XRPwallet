# XRPWallet
An XRP wallet to create new mainnet accounts offline (you can create accounts using the ed2551 algorithm or the secp256k1 algortihm), create testnet funded accounts (this has to be done online), check balances and send XRP.

Regarding mainnet, it uses a seed to derive the account address and sign transactions, 2 options are possible:

Option A: 29 characters seeds (suNq9PQrYKEifmLdFs9NPjdLeyMKm) which correspond to the secp256k1 algorithm.

Option B: 31 characters seeds (sKdNVBLAmVjgcDrEfDSzTSBqsagHMEd) which correspond to the ed25519 algorithm.

Step by step guide to set up the wallet:

1) Create an empty folder in your desktop and download the 4 files.

2) Open the HTML file in your browser (xrpwallet.html).

3) Select the network. It works for Mainnet, Testnet and Devnet.

4) Regarding generating accounts on Mainnet: select an algo. If ed25519 algorithm is selected, then it will generate an account using the ed25519 algorithm, which generates a 31 characters seed. If, otherwise, the secp256k1 algo is specified, then it will generate an account using the secp256k1 algorithm, which generates a 29 characters seed. If no "algo" is specified, it will generate an account using ed25519 algorithm, which is the default one. Then, click on "or create a Mainnet account" and check the data generated on the box at the bottom of the page (do it offline, it's purely mathematical, no internet connection is needed and makes the process more secure). The account generated is not activated, it has to be activated later on sending some XRP to it.
 
5) Regarding generating accounts on Testnet and Devnet: select "Ed25519 (31 characters seeds)" algo, you can't generate Testnet or Devnet accounts using the Secp256k1 algo (if you don't select any algo, or select the Secp256k1 one, the wallet anyway will just generate an account based on the Ed25519 algo; it will generate a 31 characters seeds). Then, click on "or create a Testnet/Devnet account)" and check the data generated on the box at the bottom of the page. It creates a Testnet or Devent account and funds it with 10 XRP. Do it online as it requires internet connection, it's not real XRP. 

6) It also allows to send XRP. Select a Net and an Algo, then past your seed on the corresponding box and click on "Get Account from Seed", it will show your account and its corresponding balance. Then, to send XRP, type the Amount you want to send on the corresponding box and the Destination address on the corresponding box, then click "Send XRP" and wait for the results. Warning: if you sign and send a transaction using a computer, as it has internet conection, we can consider the private key compromised once broadcasted the transaction. So, it's recommended having a computer that never is connected to the internet just to generate new accounts offline. So, you should generate a new keyparir offline using the "offline" computer that never is connected to the internet and send your XRP to that new fresh account. Repeat this process each time you send XRP.
