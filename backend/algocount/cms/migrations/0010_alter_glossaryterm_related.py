# Generated by Django 3.2.8 on 2021-10-22 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0009_alter_glossaryterm_related'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glossaryterm',
            name='related',
            field=models.ManyToManyField(blank=True, related_name='_cms_glossaryterm_related_+', to='cms.GlossaryTerm'),
        ),
    ]
