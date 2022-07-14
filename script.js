const accounts = [', constraseña: 123', 'Cuenta de Disney+: mail: ejemplo@gmail.com, constraseña: 123', 'Cuenta de Amazon Prime video: mail: ejemplo@gmail.com, constraseña: 123']

function generateRandomAccount() {
  const randomAccount = accounts[Math.floor(Math.random() * accounts.length)];
  alert(randomAccount)
}