import React from 'react';
import style from './listcoins.module.css';
import { useContext } from 'react';
import { CoinContext } from '../../context/coinsContext/coinContext';

export const ListCoins = () => {
    const coinsContext = useContext(CoinContext);
    const { filterdCoins } = coinsContext;
    return (
        <ul className={style.coinList}>
            {filterdCoins.map((coin) => {
                return (
                    <li key={coin.uuid} className={style.coinItem}>
                        <div className={style.coinItemInfo}>
                            <img
                                className={style.coinItemLogo}
                                src={coin.iconUrl}
                                alt={coin.name}
                            />
                            <p style={{ color: coin.color }}>{coin.name}/USD</p>
                        </div>
                        <div className={style.coinItemPrice}>
                            <p style={{ color: coin.color }}>
                                {(+coin.price).toFixed(2)} USD
                            </p>
                            <p style={{ color: coin.color }}>
                                {(+coin.btcPrice).toFixed(2)} BTC
                            </p>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
