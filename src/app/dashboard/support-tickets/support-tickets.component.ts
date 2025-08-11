import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from "./ticket.model";
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [
    NewTicketComponent,
    TicketComponent
  ],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: {title: string, text: string}) {
    this.tickets.push({
      id: Math.random().toString(36).substring(2, 15), // generate a random id
      title: ticketData.title,
      request: ticketData.text,
      status: 'open'
    });
  }

  onCloseTicket(ticketId: string) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (ticket) {
      ticket.status = 'closed';
    }
  }
}
