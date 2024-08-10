import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js with auto registered scales

const PriceChart = ({ coin }) => {
  const [priceData, setPriceData] = useState([]);
  const chartRef = React.createRef(null); // Reference for the chart canvas

  useEffect(() => {
    const fetchData = async () => {
      // Fetch price data from an API (replace with your preferred API)
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1`); // Fetch data for 1 day
      const data = await response.json();

      // Extract price data and convert timestamps to 12-hour format
      const prices = data.prices.map(price => {
        const timestamp = new Date(price[0]);
        const hours = timestamp.getHours() % 12 || 12; // Use 12-hour format
        const minutes = timestamp.getMinutes().toString().padStart(2, '0');
        const label = `${hours}:${minutes}`;
        return [label, price[1]]; // Combine label and price
      });

      setPriceData(prices);
    };

    fetchData();
  }, [coin]);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line', // Chart type
      data: {
        labels: priceData.map(item => item[0]), // Extract labels from priceData
        datasets: [
          {
            label: 'Price (USD)',
            data: priceData.map(item => item[1]), // Extract price values
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true, // Maintain aspect ratio on resize
        maintainAspectRatio: false, // Allow for full-width charts (optional)
        scales: {
          x: {
            type: 'category', // Set the x-axis scale type explicitly
            title: 'Time (12h)', // Label the x-axis
          },
          y: {
            title: 'Price (USD)',
            ticks: {
              beginAtZero: true,
            },
          },
        },
      },
    });

    // Cleanup function to avoid memory leaks on unmount
    return () => myChart.destroy();
  }, [priceData]);

  return <canvas ref={chartRef} />;
};

export default PriceChart;
