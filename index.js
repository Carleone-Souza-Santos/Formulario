const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const Tel = document.getElementById('tel').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert('Message sent successfully!');

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('tel').value = '';
  document.getElementById('message').value = '';
});