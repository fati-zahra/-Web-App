# for creating/deleting/updating products : We need to make our firstapp application a producer and the secondapp project a consumer
# for liking : We need to make our firstapp application a consumer and the secondapp project a producer

import pika, json

params = pika.URLParameters('amqps://rtcrhbpi:y6mu01VnJ8mMz9HOgPpR5piIaD5QGX6y@goose.rmq2.cloudamqp.com/rtcrhbpi')
# these  lines are responsible for establishing a connection with the RabbitMQ server.
connection = pika.BlockingConnection(params)

channel = connection.channel()

# the publish function   handles the sending of the message & The method parameter is the information about a message and body is the message to be sent.
def publish(method, body):
    properties = pika.BasicProperties(method)
    # we will be publishing our messages to a queue called firstapp
    channel.basic_publish(exchange='', routing_key='firstapp', body=json.dumps(body), properties=properties)