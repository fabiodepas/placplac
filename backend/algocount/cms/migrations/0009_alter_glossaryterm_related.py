# Generated by Django 3.2.8 on 2021-10-21 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms', '0008_alter_glossaryterm_more_info_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glossaryterm',
            name='related',
            field=models.ManyToManyField(blank=True, null=True, related_name='_cms_glossaryterm_related_+', to='cms.GlossaryTerm'),
        ),
    ]
