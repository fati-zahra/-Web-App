import pika, json

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)

    channel.basic_publish(exchange='', routing_key='secondapp', body=json.dumps(body), properties=properties)
"""

from itertools import product
import pika, json, os, django


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "firstapp.settings")

from .models import Product

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def callback(ch, method, properties, body):
    print(body)
    data = json.loads(body)
    print(data)

    if properties.content_type == 'product_liked':
        product = Product.objects.get(id=data)
        product.likes += 1
        product.save()
        print("product likes increased.")
channel.basic_consume(queue='firstapp', on_message_callback=callback)
print("Started Consuming...")
channel.start_consuming()
channel.close()"""