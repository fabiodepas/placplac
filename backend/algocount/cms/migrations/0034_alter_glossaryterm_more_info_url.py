# Generated by Django 3.2.8 on 2022-05-17 06:56

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0033_remove_reference_experiment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glossaryterm',
            name='more_info_url',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.JSONField(), blank=True, default=list, size=None),
        ),
    ]
