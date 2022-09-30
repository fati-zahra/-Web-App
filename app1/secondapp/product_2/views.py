
import requests
from django.shortcuts import render
from .producer import publish

from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets, status
from rest_framework import mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *

class ProductViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class ProductUserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.CreateModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    serializer_class = ProductUserSerializer
    queryset = ProductUser.objects.all()



@api_view(['GET'])


def like(request, id, format=None):

    #query = {'username': 'john'}
    req = requests.get('http://localhost:8000/api/user')
    data = req.json()
    print(data)
    req2 = requests.get('http://localhost:8000/api/products/'+ str(id))
    data2 = req2.json()
    print(data2['id'], data2['title'],data2['image'],data2['likes'])
    product = Product(id = data2['id'], title = data2['title'],image = data2['image'],likes = data2['likes']+1)
    product.save()


       
    try:
        productuser = ProductUser(user_id=data['id'], product_id=id)
        productuser.save()
        #serializer = ProductSerializer(instance=product, data2=request.data2)
        

        publish('product_liked', id)
        print('productuser created')
        return Response('product_liked ...', status=status.HTTP_201_CREATED)
    except:

        return Response("error ...",status=status.HTTP_400_BAD_REQUEST)

   

        

