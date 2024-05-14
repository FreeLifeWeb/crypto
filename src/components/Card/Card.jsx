import React from 'react';
import style from './card.module.css';
import { WithRuBalance } from '../../helpers/hoc/withRuBalance';

const Card = ({ balance, setBalance, ruBalance }) => {
    // console.log(ruBalance);
    return (
        <div className={style.card}>
            <div className={style.cardBlock}>
                <p>CRYPTO-FINANCE</p>
                <button onClick={() => setBalance((prev) => prev + 1000)}>
                    Add money
                </button>
            </div>

            <div className={style.cardBlock}>
                <p>Uvarov Anton</p>
                <p>{balance} $</p>
            </div>
        </div>
    );
};

export default WithRuBalance(Card);
