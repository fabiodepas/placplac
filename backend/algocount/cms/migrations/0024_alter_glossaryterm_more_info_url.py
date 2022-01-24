# Generated by Django 3.2.8 on 2022-01-24 14:38

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0023_alter_glossaryterm_more_info_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glossaryterm',
            name='more_info_url',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.JSONField(), blank=True, null=True, size=None),
        ),
    ]