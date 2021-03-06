from django.db import models
from django.db.models import Avg, Max, Min, Sum
from django_extensions.db.models import TimeStampedModel
import uuid

from apps.users.models.profile import Profile


class BasketballRatings(TimeStampedModel):
    """
    Represents a way of measuring a players attributes on a given sport
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    rebounding = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    defence = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    scoring = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    leadership = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    discipline = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    basketballIQ = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    energy = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    determination = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    clutch = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    proPotential = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        blank=True,
        null=True,
    )
    ratedBy = models.ForeignKey(
        Profile,
        related_name='basketball_ratings',
        on_delete=models.CASCADE,
        null=True)

    player = models.ForeignKey(
        Profile,
        related_name='basketballratings',
        on_delete=models.CASCADE,
        null=True)

    @property
    def account_type(self):
        return self.ratedBy.account_type

    @property
    def weight(self):
        if self.ratedBy.account_type == 'Player':
            return 0.4
        elif self.ratedBy.account_type == 'Coach':
            return 0.3
        elif self.ratedBy.account_type == 'Media':
            return 0.1
        elif self.ratedBy.account_type == 'Agent':
            return 0.1
        elif self.ratedBy.account_type == 'Fan':
            return 0.1

    class Meta:
        verbose_name = "Basketball Ratings"
        verbose_name_plural = "Basketball Ratings"
        db_table = 'basketball_ratings'

    def __str__(self):
        return self.rebounding
