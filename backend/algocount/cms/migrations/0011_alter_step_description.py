# Generated by Django 3.2.8 on 2021-10-22 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0010_alter_glossaryterm_related'),
    ]

    operations = [
        migrations.AlterField(
            model_name='step',
            name='description',
            field=models.TextField(null=True),
        ),
    ]
