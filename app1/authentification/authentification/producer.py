import pika, json

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='secondapp', body=" hola user", properties=properties)