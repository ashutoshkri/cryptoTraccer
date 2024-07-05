document.addEventListener('DOMContentLoaded', () => {
    const cryptoContainer = document.getElementById('crypto-container');

    async function fetchCryptoData() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
            const data = await response.json();
            displayCryptoData(data);
        } catch (error) {
            console.error('Error fetching crypto data:', error);
        }
    }

    function displayCryptoData(data) {
        cryptoContainer.innerHTML = '';
        data.forEach(crypto => {
            const cryptoElement = document.createElement('div');
            cryptoElement.classList.add('crypto');

            const nameElement = document.createElement('div');
            nameElement.classList.add('crypto-name');
            nameElement.textContent = crypto.name;

            const priceElement = document.createElement('div');
            priceElement.classList.add('crypto-price');
            priceElement.textContent = `$${crypto.current_price.toFixed(2)}`;

            cryptoElement.appendChild(nameElement);
            cryptoElement.appendChild(priceElement);
            cryptoContainer.appendChild(cryptoElement);
        });
    }

    fetchCryptoData();
});