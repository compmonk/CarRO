from django.urls import path

from .views import RepairOrderList, RepairOrderDetail

urlpatterns = [
    path(r'', RepairOrderList.as_view({'get': 'list'}), name='repair-order-list'),
    path(r'<int:id>', RepairOrderDetail.as_view(), name='repair-order-detail')
]
