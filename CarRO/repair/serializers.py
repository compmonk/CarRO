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

    def update(self, instance, validated_data):
        to_state = validated_data.pop('status')
        if instance.is_valid_transition(to_state):
            instance.status = to_state
        return super(RepairOrderSerializer, self).update(instance, validated_data)
