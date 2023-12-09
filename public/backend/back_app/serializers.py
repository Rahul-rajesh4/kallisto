from rest_framework import serializers
from .models import login,UserRegister,Products,productsize

class loginSerializer(serializers.ModelSerializer):
    class Meta:
        model=login
        fields='__all__'

class registerSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRegister
        fields='__all__'


class productSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__'

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model=productsize
        fields='__all__'

# class ProductSizeCountSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=ProductSizeCount
#         fields='__all__'