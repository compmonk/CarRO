from rest_framework_mongoengine.serializers import DocumentSerializer

from .models import Vehicle, Customer, RepairOrder


class VehicleSerializer(DocumentSerializer):
    class Meta:
        model = Vehicle
        fields = '__all__'


class CustomerSerializer(DocumentSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


class RepairOrderSerializer(DocumentSerializer):
    vehicle = VehicleSerializer
    customer = CustomerSerializer

    class Meta:
        model = RepairOrder
        fields = '__all__'

    def create(self, validated_data):
        validated_data.update({"status": "ORDERED"})
        return super(RepairOrderSerializer, self).create(validated_data)
