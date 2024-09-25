  // Function to generate a random number between 1 and 100
  function generateLovePercentage() {
      return Math.floor(Math.random() * (100 - 1 + 1)) + 20;
  }

  // Function to get or set love percentage
  function getLovePercentage(name1, name2) {
      const key = [name1, name2].sort().join('-');
      let data = JSON.parse(localStorage.getItem('loveData')) || {};

      if (!data[key]) {
          data[key] = {
              names: [name1, name2],
              percentage: generateLovePercentage()
          };
          localStorage.setItem('loveData', JSON.stringify(data));
      }

      return data[key].percentage;
  }

  // Main function to test love
  function testLove() {
      const name1 = document.getElementById('name1').value.trim().toLowerCase();
      const name2 = document.getElementById('name2').value.trim().toLowerCase();

      if (name1 === '' || name2 === '') {
          alert('Please enter both names');
          return;
      }

      const percentage = getLovePercentage(name1, name2);
      document.getElementById('percentage').textContent = `${percentage}%`;
  }

  // Add event listener to the button
  document.getElementById('testLove').addEventListener('click', testLove);
