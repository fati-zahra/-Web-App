import pika, json, os, django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "firstapp.settings")
django.setup()
from products.models import Product

#from products.models import Product

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='firstapp')


def callback(ch, method, properties, body):
    print('Received in firstapp')
    print(body)

    id = json.loads(body)
    print(id)
    product = Product.objects.get(id=id)
    product.likes = product.likes + 1
    product.save()
    print('Product likes increased!')


channel.basic_consume(queue='firstapp', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()