# Generated by Django 4.2.5 on 2023-12-09 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0005_productsizecount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='Imagesone',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='Imagesonefour',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='Imagesthree',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='products',
            name='Imagestwo',
            field=models.ImageField(blank=True, null=True, upload_to='images/'),
        ),
    ]