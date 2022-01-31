import React from 'react';
import moment from "moment";
// import transaction from './Transaction';
const formatDate = date => moment(date).format("DD MMM");
const transactions = ({ transactions }) => {
    const formaterCurrency = new Intl.NumberFormat('en-GB');

    const transactionsElem = [...transactions].map(e => <li key={e.id} className='transaction'>
        <span className="transaction__date">{formatDate(e.time)}</span>
        <span className="transaction__time">{ }</span>
        <span className="transaction__assets">USD → EUR</span>
        <span className="transaction__rate">0.8</span>
        <span className="transaction__amount">{formaterCurrency.format(e.amount)}</span>
    </li>)

    return (
        <ul className='transactions'>
            {transactionsElem}
        </ul>
    )

};

export default transactions;