import { useEffect, useState } from 'react';

export const useFilterCoins = (setCoins, coins) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        const filtercoins = coins.filter((coin) =>
            coin.name.toLowerCase().includes(value)
        );
        setCoins(filtercoins);
    }, [value]);
    return { setValue, value };
};
