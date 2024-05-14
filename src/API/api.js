import axios from 'axios';

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;
export const getCoins = async () => {
    try {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': key,
            },
        };
        const response = await axios.get(`${url}/coins`, options);
        return response.data.data;
    } catch (err) {
        console.log('Error: ', err);
    }
};
