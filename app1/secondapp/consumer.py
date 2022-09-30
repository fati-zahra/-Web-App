# consumer the message published by firstapp
from logging import Logger
import logging
import pika, json, os, django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "secondapp.settings")
django.setup()

#from main import Product, db
from product_2.models import Product

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')
                             
connection = pika.BlockingConnection(params)

channel = connection.channel()

# here we declare a queue that will be receiving the messages

channel.queue_declare(queue='secondapp')

# the callback function   will be called whenever a message is received.
#he ch is the channel where communication occurs. method is the information concerning message delivery. properties are user-defined properties on the message. body is the message received.

def callback(ch, method, properties, body):
    print('Received in secondapp')
    print(body)

    data = json.loads(body)
    print(data)

    if properties.content_type == 'product_created':
        product = Product(id=data['id'], title=data['title'], image=data['image'], likes=data['likes'])
        product.save()
        print('Product Created')

    elif properties.content_type == 'product_updated':
        product = Product.objects.get(id=data['id'])
       #product = Product.query.get(data['id'])

        product.title = data['title']
        product.image = data['image']
        product.likes = data['likes']
        product.save()
        print('Product Updated')

    elif properties.content_type == 'product_deleted':
        #logging.info("Log message goes here.")
        print("hola" ,data)
        product = Product.objects.get(id=data)
        product.delete()
        print('Product Deleted')

    elif properties.content_type == 'user_authenticated':
        
        print('user_authenticated successly')

# here we  instruct RabbitMQ to allow our callback function to receive messages from the secondapp queue.

channel.basic_consume(queue='secondapp', on_message_callback=callback, auto_ack=True)

print('Started Consuming')
 
 #Tell our channel to start receiving messages.
channel.start_consuming()

channel.close()