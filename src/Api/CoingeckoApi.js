import Formatter from '../Utils/Utils';

class CoingeckoApi {
    getIlsInfo() {
        return fetch('https://api.coingecko.com/api/v3/exchange_rates')
            .then(response => response.json())
            .then(data => Formatter.getCoin(data.rates,'ils'))
    }
}

const instance = new CoingeckoApi();

export default instance;