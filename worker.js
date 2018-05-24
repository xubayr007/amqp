var amqp = require('amqplib/callback_api');

amqp.connect('amqp://tedrachh:Fl_GInDjnJADhMWkLhiWB8tPn4Btm1nk@emu.rmq.cloudamqp.com/tedrachh', function(err, conn) {
    var ex = 'logs'
    var queue = 'test'
    conn.createChannel((err,ch)=>{

        // ch.consume(queue,(msg)=>{

        //     var secs = msg.content.toString().split('.').length - 1;

        //     console.log(" [x] Received %s", msg.content.toString());

        //     setTimeout(function() {
        //         console.log(" [x] Done");
        //        ch.ack(msg)
        //       }, secs * 1000);


        // },{ noAck: false});


        //Binding Exchanges

        ch.assertExchange(ex,'fanout',{durable:false})
        ch.assertQueue('',{exclusive:true},function(err,q){

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q.queue);
            ch.bindQueue(q.queue, ex, '');

            ch.consume(q.queue, function(msg) {
                console.log(" [x] %s", msg.content.toString());
              }, {noAck: true});
        })

    })

})