# Generated by Django 3.2.8 on 2022-01-24 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0019_alter_glossarycategory_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='glossary_description',
            field=models.TextField(null=True),
        ),
    ]
