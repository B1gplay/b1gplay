from django.db import models
from django_extensions.db.models import TimeStampedModel
from django_countries.fields import CountryField

class Agent(TimeStampedModel):
    name = models.CharField(max_length=50) # Link to User model
    affiliate = models.CharField(max_length=100) 
    country_of_residence = CountryField(blank_label='(select country)')
    
    class Meta:
        verbose_name = "Agent"
        verbose_name_plural = "Agents"

    def __unicode__(self):
        return '%s %s' % (self.name)





        
