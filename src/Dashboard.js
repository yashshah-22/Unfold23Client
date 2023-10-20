import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const tabs = ['dashboard', 'send', 'buy', 'deposit', 'stake', 'swap', 'faq', 'feedback'];

  const transactionsData = [
    {
      id: 1,
      date: '2023-01-15',
      description: 'Sent 0.5 ETH to John',
      amount: '-0.5 ETH',
    },
    {
      id: 2,
      date: '2023-01-16',
      description: 'Received 1.2 BTC from Alice',
      amount: '+1.2 BTC',
    },
    {
      id: 3,
      date: '2023-01-18',
      description: 'Sent 100 DAPPER tokens to a friend',
      amount: '-100 DAPPER',
    },
  ];

  const feedbackData = [
    {
      id: 1,
      date: '2023-01-20',
      text: 'Great app! I love the user interface.',
    },
    {
      id: 2,
      date: '2023-01-22',
      text: 'I encountered a bug while using the swap feature.',
    },
  ];

  const faqData = [
    {
      id: 1,
      question: 'How can I reset my password?',
      answer: 'You can reset your password by visiting the "Forgot Password" page.',
    },
    {
      id: 2,
      question: 'Is my data secure with DAPPER?',
      answer: 'Yes, we take data security very seriously and use encryption to protect your information.',
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <div className="side-bar">
        <div className="logo">
          <i className="material-icons logo-image">dashboard</i>
          <span className="logo-text">DAPPER</span>
        </div>
        <div className="menu">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`menu-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <i className="material-icons menu-icon">menu</i>
          <span className="header-title">{activeTab.toUpperCase()}</span>
          <i className="material-icons notifications-icon">notifications</i>
        </div>
        <div className="content">
          {activeTab === 'dashboard' && (
            <h2>Welcome to the DAPPER dashboard!</h2>
          )}

          {activeTab === 'send' && (
            <div className="sample-data">
              <h2>Send Section</h2>
              <Link to="/wallet">
                <button>Send Transaction</button>
              </Link>
              <ul>
                {transactionsData.map((transaction) => (
                  <li key={transaction.id}>{transaction.description}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'buy' && (
            <div className="sample-data">
              <h2>Buy Section</h2>
              <Link to="/wallet">
                <button>Buy Transaction</button>
              </Link>
              <p>Buy cryptocurrencies and tokens here.</p>
            </div>
          )}

          {activeTab === 'deposit' && (
            <div className="sample-data">
              <h2>Deposit Section</h2>
              <Link to="/wallet">
                <button>Deposit Transaction</button>
              </Link>
              <p>Deposit funds into your account.</p>
            </div>
          )}

          {activeTab === 'stake' && (
            <div className="sample-data">
              <h2>Stake your assets and earn rewards.</h2>
            </div>
          )}

          {activeTab === 'swap' && (
            <div className="sample-data">
              <h2>Swap one cryptocurrency for another.</h2>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="sample-data">
              <h2>FAQs</h2>
              <ul>
                {faqData.map((faq) => (
                  <li key={faq.id}>
                    <strong>{faq.question}</strong>
                    <p>{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'feedback' && (
            <div className="sample-data">
              <h2>Feedback</h2>
              <p>Share your feedback and suggestions with us.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
