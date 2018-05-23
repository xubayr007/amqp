var amqp = require('amqplib/callback_api')

amqp.connect('amqp://tedrachh:Fl_GInDjnJADhMWkLhiWB8tPn4Btm1nk@emu.rmq.cloudamqp.com/tedrachh', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello Mehraj!'));
    console.log(" [x] Sent 'Hello Mehraj!'");
    setTimeout(function() {
         conn.close(); process.exit(0)
         }, 500);
  });
});