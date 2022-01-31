import React from "react";
import moment from "moment";
const formatDate = date => moment(date).format("DD MMM");
const formatTime = date => moment(date).format("HH:mm");
const formaterCurrency = new Intl.NumberFormat('en-GB');

const transaction = ({id, from, to, amount, rate, time}) => {
    return (<li className='transaction'>
        <span className="transaction__date">{formatDate(time)}</span>
        <span className="transaction__time">{formatTime(time)}</span>
        <span className="transaction__assets">{`${from} → ${to}`}</span>
        <span className="transaction__rate">{`${rate}`}</span>
        <span className="transaction__amount">{formaterCurrency.format(amount)}</span>
    </li>);
}

export default transaction;