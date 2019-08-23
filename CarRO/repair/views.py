from rest_framework_mongoengine.generics import RetrieveUpdateDestroyAPIView
from rest_framework_mongoengine.viewsets import ModelViewSet

from .models import RepairOrder
from .serializers import RepairOrderSerializer


class RepairOrderList(ModelViewSet):
    lookup_field = 'id'
    serializer_class = RepairOrderSerializer
    queryset = RepairOrder.objects.all()

    def post(self, request):
        return self.create(request)


class RepairOrderDetail(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    serializer_class = RepairOrderSerializer
    queryset = RepairOrder.objects.all()

    def get(self, request, *args, **kwargs):
        return self.retrieve(self, request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(self, request, *args, **kwargs)
