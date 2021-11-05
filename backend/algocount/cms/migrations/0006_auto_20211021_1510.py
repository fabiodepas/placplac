# Generated by Django 3.2.8 on 2021-10-21 13:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0005_auto_20211021_0847'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='glossarycategory',
            name='project',
        ),
        migrations.AddField(
            model_name='glossaryterm',
            name='project',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='cms.project'),
            preserve_default=False,
        ),
    ]
