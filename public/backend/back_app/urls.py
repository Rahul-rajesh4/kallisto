from django.urls import path
from . import views


urlpatterns = [
    path('Registerapi',views.Registerapi.as_view(),name='Registerapi'),
    path('loginAPI',views.loginAPI.as_view(),name='loginAPI'),
    # path('AddProduct',views.AddProduct.as_view(),name='AddProduct'),
    path('filtermethod',views.filtermethod.as_view(),name='filtermethod'),
    path('getSingleproduct/<int:id>',views.getSingleproduct.as_view(),name='getSingleproduct'),
    path('getcartdetails',views.getcartdetails.as_view(),name='getcartdetails'),
    path('carditailsshow/<int:id>',views.carditailsshow.as_view(),name='carditailsshow'),

]