import { promisify } from 'bluebird';
import * as Web3 from 'web3';

import config from './config';

const web3 = new Web3(new Web3.providers.HttpProvider(config.GETH_URL));

async function main() {
  console.info('Connection: ', web3.isConnected());

  const getBalanceAsync = promisify(web3.eth.getBalance);
  const balance = await getBalanceAsync(config.ETH_ADDRESS);
  console.info('ETH account balance: ', balance);

  process.exit();
}

main();
