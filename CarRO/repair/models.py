from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import *


class Vehicle(EmbeddedDocument):
    make = StringField
    model = StringField
    license_no = StringField


class Customer(EmbeddedDocument):
    name = StringField
    email_id = EmailField
    mobile_no = StringField(max_length=10)


states = ('ORDERED', 'REPAIRING', 'REPAIRED', 'REVIEWING', 'DONE')


class RepairOrder(Document):
    id = IntField(primary_key=True, unique=True)
    vehicle = EmbeddedDocumentField(Vehicle)
    Customer = EmbeddedDocumentField(Vehicle)
    status = StringField(choices=states)
