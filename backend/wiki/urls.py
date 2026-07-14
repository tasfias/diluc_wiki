from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CharacterViewSet, SectionViewSet

router = DefaultRouter()
router.register(r'characters', CharacterViewSet)
router.register(r'sections', SectionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]