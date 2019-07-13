from rest_framework import routers
from .views import LeadListCreate
from knox import views as knox_views
from django.urls import path, include
from .views import RegisterAPI, LoginAPI, UserAPI

router = routers.DefaultRouter()
router.register('api/lead',LeadListCreate,'leads')
urlpatterns = router.urls+[
  path('api/auth', include('knox.urls')),
  path('api/auth/register', RegisterAPI.as_view()),
  path('api/auth/login', LoginAPI.as_view()),
  path('api/auth/user', UserAPI.as_view()),
  path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]