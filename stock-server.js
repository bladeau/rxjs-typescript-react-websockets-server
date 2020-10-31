const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const randomStockObject = require('./random-stock-values');

const port = process.env.PORT || 9090;

io.on('connection', (socket) => {
  getStockValues(socket);
  setInterval(() => {
    getStockValues(socket);
  }, 5000);
});

function getStockValues(socket) {
  socket.emit('appleStocks', randomStockObject.getAppleStockValues());
}

http.listen(port, () =>
  console.log(`The stock server is istening on PORT - ${port}`)
);
