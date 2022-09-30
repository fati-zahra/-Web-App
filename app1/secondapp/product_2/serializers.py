# this file handles the serialization of our model instances

from itertools import product
from rest_framework import serializers

from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class ProductUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUser
        fields = '__all__'