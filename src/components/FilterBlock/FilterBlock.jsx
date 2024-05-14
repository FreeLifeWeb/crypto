import React, { useContext } from 'react';
import style from './filterblock.module.css';
import { CoinContext } from '../../context/coinsContext/coinContext';
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const FilterBlock = ({ setCoins }) => {
    const coinsContext = useContext(CoinContext);
    const { coins } = coinsContext;
    const { setValue, value } = useFilterCoins(setCoins, coins);
    return (
        <div className={style.filterBlock}>
            <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={style.input}
                type="text"
                placeholder="bitcoin"
            ></input>
        </div>
    );
};

export const FilterBlockMemo = React.memo(FilterBlock);
