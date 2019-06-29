const data = [{
    id: 1,
    name: 'Bitcoin',
    ticker: 'BTC'
}, {
    id: 2,
    name: 'Ethereum',
    ticker: 'ETH'
}, {
    id: 3,
    name: 'Ripple',
    ticker: 'XRP'
}, {
    id: 4,
    name: 'Litecoin',
    ticker: 'LTC'
}, {
    id: 5,
    name: 'Bitcoin Cash',
    ticker: 'BCH'
}, {
    id: 6,
    name: 'EOS',
    ticker: 'EOS'
}, {
    id: 7,
    name: 'Binance Coin',
    ticker: 'BNB'
}, {
    id: 8,
    name: 'Bitcoin SV',
    ticker: 'BSV'
}, {
    id: 9,
    name: 'Tether',
    ticker: 'USDT'
}, {
    id: 10,
    name: 'Tron',
    ticker: 'TRX'
}];

module.exports = {
    all() {
        return data;
    },
    getById(id) {
        if (id<0 || id>data.length) {
            return null;
        }

        return data[id-1];
    }
}