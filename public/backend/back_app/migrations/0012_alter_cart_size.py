# Generated by Django 4.2.5 on 2023-12-17 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back_app', '0011_cart'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='size',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
