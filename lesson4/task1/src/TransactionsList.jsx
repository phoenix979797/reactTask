import React from 'react';
import Transaction from './Transaction';

// import transaction from './Transaction';


const transactions = ({ transactions }) => {
  const transactionList = [...transactions]
    return (
        <ol className='transactions'>
        {transactionList.map(e => <Transaction key={e.id} {...e}/>)}
        </ol>
    )

};

export default transactions;