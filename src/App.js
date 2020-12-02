import React from 'react';
import logo from './logo.svg';
import './App.css';
import PaypalCheckoutButton from './components/PaypalCheckutButton';

function App() {
  const order ={
    customer:'123456',
    total:'550.00',
    items:[
    {
      sku:'123',
      name: 'camisa',
      price:'300.00',
      quantity: 1,
      currency:'MXN'
    },
    {
      sku:'13',
      name: 'pantalon',
      price:'125.00',
      quantity: 2,
      currency:'MXN'

    }

    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PaypalCheckoutButton order={order} />
      </header>
    </div>
  );
}

export default App;
