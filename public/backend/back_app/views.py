from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *


class Registerapi(GenericAPIView):
    serializer_class=loginSerializer
    serializer_class_reg=registerSerializer
    def post(self,request):
        name=request.data.get('name')
        contact=request.data.get('contact')
        email=request.data.get('email')
        password=request.data.get('password')
        address=request.data.get('address')
        role='user'
        log_id=''
        if(login.objects.filter(email=email)):
            return Response({'message':'duplicate username found'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class(data={'email':email,'password':password,'role':role})
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
        serializer_reg=self.serializer_class_reg(data={'name':name,'contact':contact,'log_id':log_id,'address':address})
        if serializer_reg.is_valid():
             serializer_reg.save()
             return Response({'data':serializer_reg.data,'message':'Registered success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer_reg.errors,'message':'failed','success':False},status=status.HTTP_400_BAD_REQUEST)
        

class loginAPI(GenericAPIView):
    serializer_class=loginSerializer
    def post(self,request):
        email=request.data.get('email')
        password=request.data.get('password')
        logreg=login.objects.filter(email=email,password=password)
        if (logreg.count()>0):
            serializer=loginSerializer(logreg,many=True)
            for i in serializer.data:
                l_id=i['id']
                role=i['role']
            regdata=UserRegister.objects.all().filter(log_id=l_id).values()
            for i in regdata:
                user_id=i['id']
            return Response({'data':{'email':email,'log_id':l_id,'role':role,'user_id':user_id},'message':'success','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':'invalid credentials','success':False},status=status.HTTP_400_BAD_REQUEST)



# class AddProduct(GenericAPIView):
#     serializer_class=productSerializer
#     serilizer_count=productsize

#     def post(self,request):
#         name=request.data.get('name')
#         category=request.data.get('category')
#         gender=request.data.get('gender')
#         actualprice=request.data.get('actualprice')
#         discountprice=request.data.get('discountprice')
#         description=request.data.get('description')
#         size=request.data.get('size')
#         Imagesone = request.data.get('Imagesone')
#         Imagestwo = request.data.get('Imagestwo')
#         Imagesthree = request.data.get('Imagesthree')
#         Imagesfour = request.data.get('Imagesfour')
#         # count=request.data.get('count')
#         # sizze=productsize.objects.get('')
#         serializer = self.serializer_class(data={'name':name,'category':category,'gender':gender,'actualprice':actualprice,'discountprice':discountprice,'description':description,'size':size,'Imagesone':Imagesone,'Imagestwo':Imagestwo,'Imagesthree':Imagesthree,'Imagesfour':Imagesfour})
        


#         if serializer.is_valid():
#             serializer.save()

#         else:
#             print(f"Serializer errors: {serializer.errors}")
            
#         return Response({'data': serializer.errors, 'message': 'Failed', 'success': False},
#                         status=status.HTTP_400_BAD_REQUEST)


class filtermethod(GenericAPIView):
    serializer_class=productSerializer
    def post(self,request):
        category=request.data.get('category')
        gender=request.data.get('gender')
        print(gender,'----7777777')
        if category:
         result=Products.objects.filter(category=category,gender=gender)
        else:
         result=Products.objects.filter(gender=gender)

        datas=self.serializer_class(data=result,many=True)
        # print(datas,'---------')
        if datas.is_valid():
         datas.save()
        return Response({'data':datas.data,'message':'success'})
     

class getSingleproduct(GenericAPIView):
    serializer_class=productSerializer
    serializer_class_size=SizeSerializer
    def get(self,request,id):
        prodata=Products.objects.get(id=id)
        print(prodata,'------e5')
        newdata=self.serializer_class(prodata)
        print(newdata,'========new')
        size=productsize.objects.filter(pro_name=prodata)
        sizedata=self.serializer_class_size(size,many=True)
        print(size,'///////////////////')
        return Response({'data':newdata.data,'data2':sizedata.data})


class getcartdetails(GenericAPIView):
    serializer_class=cartSerializer
    def post(self,request):
        size=request.data.get('selectedSize')
        log_id=request.data.get('log_id')
        product_name=request.data.get('product_name')
        serializer=self.serializer_class(data={'product_name':product_name,'size':size,'log_id':log_id})
        if serializer.is_valid():
            serializer.save()
        # print(size)
        # print(log_id)
        # print(product_name)
        return Response({'data':serializer.data,'suceess':'success'})

class carditailsshow(GenericAPIView):
    serializer_class=cartSerializer
    def get(self,request,id):
        cartData=cart.objects.filter(log_id=id)
        serializer=self.serializer_class(cartData,many=True)
        print(cartData,'cartData')
        return Response({'data':serializer.data,'suceess':'success'})
