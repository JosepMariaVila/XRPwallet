// ******************************************************
// ************* Get the Preferred Network **************
// ******************************************************

function getNet() {
  let net;
  if (document.getElementById("tn").checked)
    net = "wss://s.altnet.rippletest.net:51233";
  if (document.getElementById("dn").checked)
    net = "wss://s.devnet.rippletest.net:51233";
  if (document.getElementById("mn").checked) net = "wss://xrplcluster.com";
  return net;
} // End of getNet()

// *******************************************************
// ************* Create Testnet Devent Account ***********
// *******************************************************

async function getAccount(type) {
  let net = getNet();

  const client = new xrpl.Client(net);
  results = "Connecting to " + net + "....";

  // This uses the default faucet for Testnet/Devnet
  let faucetHost = null;

  if (type == "standby") {
    standbyResultField.value = results;
  }
  await client.connect();

  results += "\nConnected, funding wallet.";
  if (type == "standby") {
    standbyResultField.value = results;
  }

  // -----------------------------------Create and fund a test account wallet
  const my_wallet = (await client.fundWallet(null, { faucetHost })).wallet;

  results += "\nGot a wallet.";
  if (type == "standby") {
    standbyResultField.value = results;
  }

  // ------------------------------------------------------Get the current balance.
  const my_balance = await client.getXrpBalance(my_wallet.address);

  if (type == "standby") {
    standbyAccountField.value = my_wallet.address;
    standbyBalanceField.value = await client.getXrpBalance(my_wallet.address);
    standbySeedField.value = my_wallet.seed;
    results += "\nNew account created.";
    standbyResultField.value = results;
  }
  // --------------- Capture the seeds for both accounts for ease of reload.
  seeds.value = standbySeedField.value;
  client.disconnect();
} // End of getAccount()

// *******************************************************
// ************* Create XRP Mainnet Account **************
// *******************************************************

async function getAccount2(type) {
  const wallet = xrpl.Wallet.generate("ed25519");
  console.log(wallet);

  if (type == "standby") {
    standbyResultField.value =
      "Creating a wallet...\n" + "Wallet created:\n" + JSON.stringify(wallet);
  }

  if (type == "standby") {
    standbyAccountField.value = wallet.address;
    standbySeedField.value = wallet.seed;
    seeds.value = standbySeedField.value;
  }
} // End of getAccount2()

// *******************************************************
// ********** Get Accounts from Seeds ********************
// *******************************************************

async function getAccountsFromSeeds() {
  let net = getNet();
  const client = new xrpl.Client(net);
  results = "Connecting to " + getNet() + "....";
  standbyResultField.value = results;
  await client.connect();
  results += "\nConnected.\n";
  standbyResultField.value = results;

  // -------------------------------------------------Find the test account wallets.
  var lines = seeds.value.split("\n");
  const standby_wallet = xrpl.Wallet.fromSeed(lines[0]);

  // -------------------------------------------------------Get the current balance.
  const standby_balance = await client.getXrpBalance(standby_wallet.address);

  // ----------------------Populate the fields for Standby account.
  standbyAccountField.value = standby_wallet.address;
  standbySeedField.value = standby_wallet.seed;
  standbyBalanceField.value = await client.getXrpBalance(
    standby_wallet.address
  );

  client.disconnect();
} // End of getAccountsFromSeeds()

// *******************************************************
// ******************** Send XRP *************************
// *******************************************************

async function sendXRP() {
  results = "Connecting to the selected ledger.\n";
  standbyResultField.value = results;
  let net = getNet();
  results = "Connecting to " + getNet() + "....";
  const client = new xrpl.Client(net);
  await client.connect();

  results += "\nConnected. Sending XRP.\n";
  standbyResultField.value = results;

  const standby_wallet = xrpl.Wallet.fromSeed(standbySeedField.value);
  const sendAmount = standbyAmountField.value;

  results += "\nSending from account: " + standby_wallet.address;
  standbyResultField.value = results;

  // -------------------------------------------------------- Prepare transaction
  const prepared = await client.autofill({
    TransactionType: "Payment",
    Account: standby_wallet.address,
    Amount: xrpl.xrpToDrops(sendAmount),
    Destination: standbyDestinationField.value,
  });

  // ------------------------------------------------- Sign prepared instructions
  const signed = standby_wallet.sign(prepared);

  // -------------------------------------------------------- Submit signed blob
  const tx = await client.submitAndWait(signed.tx_blob);

  results +=
    "\nBalance changes: " +
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2);
  standbyResultField.value = results;

  standbyBalanceField.value = await client.getXrpBalance(
    standby_wallet.address
  );
  client.disconnect();
} // End of sendXRP()
