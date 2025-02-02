document.getElementById('yes-btn').addEventListener('click', function() {
    // Redirect to WhatsApp with a message for the user who clicked 'Yes'
    const phoneNumber = '7082240581';
    const message = 'Yes, I want to be your girlfriend! 💖';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
  
  document.getElementById('no-btn').addEventListener('click', function() {
    // Send a message saying 'No' to the specified number
    const phoneNumber = '7082240581';
    const message = 'No, I don\'t want to be your girlfriend.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  });
  