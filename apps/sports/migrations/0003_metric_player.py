# Generated by Django 2.1.10 on 2019-09-17 13:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20190917_1326'),
        ('sports', '0002_auto_20190917_1307'),
    ]

    operations = [
        migrations.AddField(
            model_name='metric',
            name='player',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='basketballratings', to='users.Profile'),
        ),
    ]
