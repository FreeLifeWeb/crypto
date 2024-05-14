import React from 'react';
import style from './styles.module.css';
import Card from '../../components/Card/Card';
import { ListCoins } from '../../components/ListCoins/ListCoins';
import { FilterBlockMemo } from '../../components/FilterBlock/FilterBlock';

export const Main = ({
    balance,
    setBalance,
    coins,
    setCoins,
    filterdCoins,
}) => {
    return (
        <>
            <main className={style.main}>
                <Card balance={balance} setBalance={setBalance} />
                <FilterBlockMemo setCoins={setCoins} />
                {coins.length > 0 ? <ListCoins /> : <div>Loading...</div>}
            </main>
        </>
    );
};
