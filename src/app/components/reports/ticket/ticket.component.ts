import { Component, OnInit, Input } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TicketStatus } from 'src/app/models/reports/ticket-status.model';
import { Ticket } from 'src/app/models/reports/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  faChevronRight = faChevronRight;

  ticketStatus = TicketStatus;

  statusBackground: string = "";

  @Input() ticket: Ticket = {
    ticketId: "",
    subject: "",
    date: "",
    from: "",
    status: "",
    body: ""
  }

  constructor() { }

  ngOnInit(): void {
    this.getStatusColor()
  }

  getStatusColor(): void {
    switch (this.ticket.status) {
      case this.ticketStatus.NEW:
        this.statusBackground = '#e4524d';
        break;

      case this.ticketStatus.IN_PROGRESS:
        this.statusBackground = '#F7a934';
        break;

      case this.ticketStatus.SOLVED:
        this.statusBackground = '#7325c2';
        break;

      default:
        break;
    }
  }
}