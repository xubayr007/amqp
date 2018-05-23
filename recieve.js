var amqp = require('amqplib/callback_api');

amqp.connect('amqp://tedrachh:Fl_GInDjnJADhMWkLhiWB8tPn4Btm1nk@emu.rmq.cloudamqp.com/tedrachh',(err,conn)=>{

    conn.createChannel((err,ch)=>{
        var q='hello'
        ch.assertQueue(q,{durable:false})
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
        ch.consume(q, function(msg) {
          console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true});
    })

})