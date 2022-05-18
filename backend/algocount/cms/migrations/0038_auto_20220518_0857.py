# Generated by Django 3.2.8 on 2022-05-18 06:57

import cms.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0037_alter_projectmedia_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experimentadditionalmaterial',
            name='file',
            field=models.FileField(upload_to=cms.models.get_upload_experiment_path),
        ),
        migrations.AlterField(
            model_name='stepdownload',
            name='file',
            field=models.FileField(upload_to=cms.models.get_upload_step_path),
        ),
        migrations.AlterUniqueTogether(
            name='glossarycategory',
            unique_together=set(),
        ),
    ]
