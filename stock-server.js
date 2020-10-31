const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const randomStockObject = require('./random-stock-values');

const port = process.env.PORT || 9090;
io.of('/live'); //create namespaces
io.on('connection', (socket) => {
  socket.on('joinStocksRoom', (room) => {
    if (room == 'stocks') {
      socket.join('stocks');
      setInterval(() => {
        io.of('/live').to('stocks').emit('liveStocks'),
          [randomStockObject.getAppleStockValues()];
      }, 5000);
    }
  });
});

// function getStockValues(socket) {
//   socket.emit('appleStocks', randomStockObject.getAppleStockValues());
// }

http.listen(port, () =>
  console.log(`The stock server is istening on PORT - ${port}`)
);
