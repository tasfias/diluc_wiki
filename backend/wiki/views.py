#from django.shortcuts import render
from rest_framework import viewsets
from .models import Character, Section
from .serializers import CharacterSerializer, SectionSerializer

class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    lookup_field = 'slug'

class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer