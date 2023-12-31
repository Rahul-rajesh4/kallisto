# Generated by Django 4.2.5 on 2023-12-09 07:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0002_userregister_address'),
    ]

    operations = [
        migrations.CreateModel(
            name='size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('count', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('category', models.CharField(max_length=50)),
                ('gender', models.CharField(max_length=50)),
                ('actualprice', models.CharField(max_length=50)),
                ('discountprice', models.CharField(max_length=50)),
                ('description', models.CharField(max_length=50)),
                ('Imagesone', models.ImageField(null=True, upload_to='images/')),
                ('Imagestwo', models.ImageField(null=True, upload_to='images/')),
                ('Imagesthree', models.ImageField(null=True, upload_to='images/')),
                ('Imagesonefour', models.ImageField(null=True, upload_to='images/')),
                ('size', models.ManyToManyField(blank=True, to='back_app.size')),
            ],
        ),
    ]
