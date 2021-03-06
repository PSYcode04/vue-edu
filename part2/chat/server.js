var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  // __dirname: 서버가 실행된 현재 디렉토리
});

// on('이벤트 이름', callback 함수)
io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});
