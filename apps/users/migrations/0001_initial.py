# Generated by Django 2.1.10 on 2019-07-31 16:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields
import django_extensions.db.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0009_alter_user_last_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
                'db_table': 'user',
            },
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('address_type', models.PositiveSmallIntegerField(choices=[(1, 'residential'), (2, 'work'), (3, 'delivery'), (4, 'billing')])),
                ('line_1', models.CharField(max_length=100)),
                ('line_2', models.CharField(blank=True, max_length=100, null=True)),
                ('phone', models.CharField(max_length=20)),
                ('city_town', models.CharField(max_length=50)),
                ('county_or_province', models.CharField(blank=True, max_length=50, null=True)),
                ('zip_or_postcode', models.CharField(blank=True, max_length=100, null=True)),
                ('country', django_countries.fields.CountryField(max_length=2)),
            ],
            options={
                'verbose_name': 'Address',
                'verbose_name_plural': 'Addresses',
                'db_table': 'address',
            },
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('joined', models.DateField(blank=True, null=True)),
                ('finished', models.DateField(blank=True, null=True)),
                ('institutionType', models.PositiveSmallIntegerField(choices=[(1, 'university'), (2, 'college'), (3, 'vocation'), (4, 'high school')])),
                ('school', models.CharField(max_length=100)),
                ('concentration', models.CharField(blank=True, max_length=100, null=True)),
                ('qualification', models.CharField(blank=True, max_length=100, null=True)),
                ('place', models.CharField(max_length=100)),
                ('country', django_countries.fields.CountryField(max_length=2)),
            ],
            options={
                'verbose_name': 'Education Experience',
                'verbose_name_plural': 'Education Experiences',
                'db_table': 'education',
            },
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('firstname', models.CharField(blank=True, max_length=30)),
                ('lastname', models.CharField(blank=True, max_length=30)),
                ('gender', models.CharField(blank=True, max_length=6)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('residence_country', models.CharField(blank=True, max_length=100)),
                ('account_type', models.CharField(blank=True, max_length=20)),
                ('affiliation', models.CharField(blank=True, max_length=100)),
                ('media_house', models.CharField(blank=True, max_length=100)),
                ('position', models.CharField(blank=True, max_length=100)),
                ('height', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('wingspan', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('vertical_leap', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('time_to_run_40m', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('time_to_run_100m', models.DecimalField(decimal_places=2, max_digits=6, null=True)),
                ('bio', models.TextField(blank=True, max_length=500)),
                ('profile_photo', models.ImageField(default='profile_photos/avatar1.png', upload_to='profile_photos')),
                ('cover_photo', models.ImageField(default='cover_photos/cover.jpg', upload_to='cover_photos')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Profile',
                'verbose_name_plural': 'Profiles',
                'db_table': 'profile',
            },
        ),
        migrations.AddField(
            model_name='education',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.Profile'),
        ),
        migrations.AddField(
            model_name='address',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='users.Profile'),
        ),
    ]
