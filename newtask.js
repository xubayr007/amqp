
var amqp = require('amqplib/callback_api');

amqp.connect('amqp://tedrachh:Fl_GInDjnJADhMWkLhiWB8tPn4Btm1nk@emu.rmq.cloudamqp.com/tedrachh', function(err, conn) {
  var ex ='logs'
  var queue = 'test'
  var msg = process.argv.slice(2).join(' ') || "Hello Mehraj!";

  conn.createChannel((err,ch)=>{

  //  ch.assertQueue(queue,{durable:true})

  //  var i = 0
  //  for(i;i<=100;i++)
  //   ch.sendToQueue(queue,new Buffer(msg),{persistent :true});


    //Binding Exchanges

      ch.assertExchange(ex,'fanout',{durable:false})
      ch.publish(ex,'',new Buffer(msg))

 

    console.log(" [x] Sent '%s'", msg);
  });


});