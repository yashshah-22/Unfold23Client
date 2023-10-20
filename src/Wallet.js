import React, { useState } from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { FileCopy, Send, SwapHoriz, AccountBalance, AccountBalanceWallet, Add } from '@mui/icons-material';
import './Wallet.css';

const Wallet = () => {
  const [selectedNetwork, setSelectedNetwork] = useState('Mainnet');
  const [selectedAccount, setSelectedAccount] = useState('Account 1');
  const userAddress = '0x1234...5678';
  const ethValue = '2.345 ETH';
  const usdValue = '$456.78';

  const handleCopyAddress = () => {
    
    alert('Address copied to clipboard');
  };

  return (
    <div className="metamask-container">
      <div className="network-account">
        <Typography variant="subtitle2">Network:</Typography>
        <Select
          value={selectedNetwork}
          onChange={(e) => setSelectedNetwork(e.target.value)}
        >
          <MenuItem value="Mainnet">Mainnet</MenuItem>
          <MenuItem value="Ropsten">Ropsten</MenuItem>
          {/* Add more network options */}
        </Select>
        <Typography variant="subtitle2">Your Account:</Typography>
        <Select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          <MenuItem value="Account 1">Account 1</MenuItem>
          <MenuItem value="Account 2">Account 2</MenuItem>
          {/* Add more account options */}
        </Select>
      </div>
      <div className="user-info">
        <Typography variant="body2">{userAddress}</Typography>
        <Button
          variant="outlined"
          startIcon={<FileCopy />}
          onClick={handleCopyAddress}
        >
          Copy
        </Button>
      </div>
      <div className="balance-info">
        <Typography variant="h4" className="eth-value">{ethValue}</Typography>
        <Typography variant="h4" className="usd-value">{usdValue}</Typography>
      </div>
      <div className="action-buttons">
        <Button variant="contained" color="primary" startIcon={<Send/>}>Send</Button>
        <Button variant="contained" color="primary" startIcon={<SwapHoriz/>}>Swap</Button>
        <Button variant="contained" color="primary" startIcon={<AccountBalanceWallet/>}>Bridge</Button>
        <Button variant="contained" color="primary" startIcon={<Add/>}>Add</Button>
      </div>
      <div className="sections">
        <Button variant="contained" color="primary">
          Tokens
        </Button>
        <Button variant="contained" color="primary">
          NFTs
        </Button>
        <Button variant="contained" color="primary">
          Activity
        </Button>
      </div>
      {/* Add content for Tokens, NFTs, and Activity sections */}
    </div>
  );
};

export default Wallet;
