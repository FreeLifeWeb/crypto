import { React, useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { Main } from './pages/Main/Main';
import { getCoins } from './API/api';
import { CoinContext } from './context/coinsContext/coinContext';

function App() {
    const [balance, setBalance] = useState(50000);
    const [coins, setCoins] = useState([]);
    const [filterdCoins, setFilterdCoins] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getCoins();
            setCoins(data.coins);
            setFilterdCoins(data.coins);
        };
        fetchData();
    }, []);
    return (
        <>
            <CoinContext.Provider value={{ coins, filterdCoins }}>
                <Header />
                <Main
                    balance={balance}
                    setBalance={setBalance}
                    coins={coins}
                    setCoins={setFilterdCoins}
                    filterdCoins={filterdCoins}
                />
            </CoinContext.Provider>
        </>
    );
}

export default App;
