import { Component, OnInit } from '@angular/core';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Ticket } from 'src/app/models/reports/ticket.model';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faChevronLeft = faChevronLeft;
  tickets: Ticket[] = [];

  constructor(
    private ticketService: TicketService
  ) { }


  ngOnInit(): void {
    this.ticketService.getAllTickets().subscribe(
      data => {
        this.tickets = data;
      }
    )
  }

}
