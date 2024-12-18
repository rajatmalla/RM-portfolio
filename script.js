document.getElementById('browse-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const pickupLocation = document.getElementById('pickup-location').value;
    const pickupTime = document.getElementById('pickup-time').value;
    const dropoffTime = document.getElementById('dropoff-time').value;
  
    document.getElementById('car-results').innerHTML = `
      <p>Searching for cars in ${pickupLocation} from ${pickupTime} to ${dropoffTime}...</p>
      <p>(Mock Data: Add API or database logic here.)</p>
    `;
  });
  
  document.getElementById('rent-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const carModel = document.getElementById('car-model').value;
    const location = document.getElementById('car-location').value;
    const price = document.getElementById('price').value;
  
    alert(`Car "${carModel}" listed at ${location} for $${price}/day.`);
  });
  