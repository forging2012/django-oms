# -*- coding: utf-8 -*-
# author: kiven

from rest_framework import viewsets
from worktickets.models import WorkTicket, TicketComment, TicketEnclosure, TicketType, TicketWiki
from worktickets.serializers import (WorkTicketSerializer,
                                     TicketCommentSerializer,
                                     TicketEnclosureSerializer,
                                     TicketTypeSerializer,
                                     TicketWikiSerializer)
from worktickets.filters import WorkTicketFilter, WorkTicketFilterBackend
from rest_framework.filters import SearchFilter
from dry_rest_permissions.generics import DRYPermissions

class WorkTicketViewSet(viewsets.ModelViewSet):
    queryset = WorkTicket.objects.all().order_by('-create_time')
    serializer_class = WorkTicketSerializer
    filter_class = WorkTicketFilter
    filter_backends = (SearchFilter,WorkTicketFilterBackend)
    search_fields = ['title', 'content', 'type__name']
    permission_classes = (DRYPermissions,)


class TicketCommentViewSet(viewsets.ModelViewSet):
    queryset = TicketComment.objects.all()
    serializer_class = TicketCommentSerializer
    filter_fields = ['ticket__ticketid']


class TicketEnclosureViewSet(viewsets.ModelViewSet):
    queryset = TicketEnclosure.objects.all()
    serializer_class = TicketEnclosureSerializer
    filter_fields = ['ticket__ticketid']


class TicketTypeViewSet(viewsets.ModelViewSet):
    queryset = TicketType.objects.all()
    serializer_class = TicketTypeSerializer


class TicketWikiViewSet(viewsets.ModelViewSet):
    queryset = TicketWiki.objects.all()
    serializer_class = TicketWikiSerializer
