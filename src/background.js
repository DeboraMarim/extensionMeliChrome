const axios = require('axios');

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// Exemplo de uso do axios
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Erro ao fazer a requisição:', error);
  });
