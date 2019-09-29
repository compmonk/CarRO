from django.utils import timezone
from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import *


class Vehicle(EmbeddedDocument):
    make = StringField()
    model = StringField()
    license_no = StringField()


class Customer(EmbeddedDocument):
    name = StringField()
    email_id = EmailField()
    mobile_no = StringField(max_length=10)


states = ("ORDERED", "REPAIRING", "REPAIRED", "REVIEWING", "DONE")


class RepairOrder(Document):
    id = SequenceField(primary_key=True)
    date = DateTimeField(default=timezone.now)
    vehicle = EmbeddedDocumentField(Vehicle)
    customer = EmbeddedDocumentField(Customer)
    status = StringField(choices=states, default="ORDERED")
    complaint = StringField(max_length=300)

    def is_valid_transition(self, to_state):
        if self.status == "ORDERED":
            return to_state == "REPAIRING"
        if self.status == "REPAIRING":
            return to_state == "REPAIRED"
        if self.status == "REPAIRED":
            return to_state == "REVIEWING"
        if self.status == "REVIEWING":
            return to_state in ["REPAIRING", "DONE"]
        return False
