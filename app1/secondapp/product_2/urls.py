from django.urls import path, include
from requests import request
import requests
from . import views
from .views import ProductViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('productusers', views.ProductUserViewSet, basename='productusers')
#router.register('products/<int:id>/like', views.api_view, basename='products/<int:id>/like')

urlpatterns = [
    path('product', ProductViewSet.as_view({
        'get': 'list',
    })),
        path('', include(router.urls)),
        path('products/<int:id>/like', views.like, name='like'),



]



