import React from 'react';
import Transaction from './Transaction';

// import transaction from './Transaction';


const transactions = ({ transactions }) => {
  const transactionList = [...transactions]
    return (
        <ul className='transactions'>
        {transactionList.map(e => <Transaction key={e.id} {...e}/>)}
        </ul>
    )

};

export default transactions;