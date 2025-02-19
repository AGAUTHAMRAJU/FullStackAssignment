from django.urls import path
from .views import RegisterView, TokenView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenView.as_view(), name='token'),
]
