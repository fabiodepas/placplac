# Generated by Django 3.2.8 on 2021-10-25 12:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0011_alter_step_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='experiment',
            name='cover',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='cms.projectmedia'),
        ),
    ]