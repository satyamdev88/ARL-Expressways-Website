from django.db import models

# Create your models here.
class LoginDetail(models.Model):
    name = models.CharField(max_length=100)
    mobNo = models.IntegerField(max_length=10)
    email = models.EmailField(max_length=100)
    msg_dec = models.CharField(max_length=200)