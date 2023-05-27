// Helper function to create table cells
function createTableCell(value) {
  const cell = document.createElement('td');
  cell.textContent = value;
  return cell;
}

// Format number with dollar symbol
function formatWithDollar(number) {
  return '$' + number.toLocaleString();
}

// Function to render the table with data
function renderTable(data) {
  const coinTableBody = document.getElementById('coinTableBody');
  coinTableBody.innerHTML = '';

  data.forEach((coin) => {
    const row = document.createElement('tr');

    // Create image cell
    const imageCell = document.createElement('td');
    const imageElement = document.createElement('img');
    imageElement.src = coin.image;
    imageElement.alt = coin.name;
    imageElement.width = 30;
    imageElement.height = 30;
    imageCell.appendChild(imageElement);
    row.appendChild(imageCell);

    row.appendChild(createTableCell(coin.name));
    row.appendChild(createTableCell(coin.id));
    row.appendChild(createTableCell(coin.symbol));
    row.appendChild(createTableCell(formatWithDollar(coin.current_price)));
    row.appendChild(createTableCell(formatWithDollar(coin.total_volume)));
    row.appendChild(createTableCell(formatWithDollar(coin.market_cap)));
    row.appendChild(createTableCell(coin.market_cap_change_percentage_24h + '%'));

    coinTableBody.appendChild(row);
  });
}

// Fetch data using async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    const data = await response.json();
    let filteredData = [...data]; // Create a copy of the data array for filtering

    const searchInput = document.getElementById('searchInput');
    const sortMarketCapButton = document.getElementById('sortMarketCapButton');
    const sortPercentageButton = document.getElementById('sortPercentageButton');

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      filteredData = data.filter(
        coin => coin.name.toLowerCase().includes(searchValue) || coin.symbol.toLowerCase().includes(searchValue)
      );
      renderTable(filteredData);
    });

    sortMarketCapButton.addEventListener('click', () => {
      filteredData.sort((a, b) => b.market_cap - a.market_cap);
      renderTable(filteredData);
    });

    sortPercentageButton.addEventListener('click', () => {
      filteredData.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);
      renderTable(filteredData);
    });

    renderTable(filteredData);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
