from django.contrib import admin
from .models import login,UserRegister,Products,productsize
# Register your models here.
admin.site.register(login)
admin.site.register(UserRegister)
# admin.site.register(Products)
# admin.site.register(productsize)


class sizetabview(admin.TabularInline):
    model=productsize

class productlistview(admin.ModelAdmin):
    list_display=('name','actualprice','discountprice')
    inlines=[sizetabview,]
admin.site.register(Products,productlistview)

