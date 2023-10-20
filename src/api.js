import Web3 from 'web3';
const web3 = new Web3('INFURA_API_URL');
import contractAbi from './ContractABI.json';
const contractAddress = 'ADDRESS';

const contract = new web3.eth.Contract(contractAbi, contractAddress);

// contract.methods.someFunction().call