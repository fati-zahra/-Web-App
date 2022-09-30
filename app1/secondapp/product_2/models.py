from turtle import title
from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.IntegerField(unique=True, primary_key=True)
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    likes = models.PositiveIntegerField(default=0)

    def __str__(self):
            return self.title


class ProductUser(models.Model):
     #id = models.IntegerField(primary_key=True)
     user_id = models.IntegerField(blank=True)
     product_id = models.IntegerField(unique=True, blank=True)

     def __str__(self):
             return f"User id {str(self.user_id)} Product id {str(self.product_id)}"

"""class Meta:
    db_table = 'ProductUser'
    constraints = [
        models.UniqueConstraint(fields=['user_id', 'product_id'], name='user_product_unique')
    ]"""



    


    