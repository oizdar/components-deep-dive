import { Component, input, output, signal } from '@angular/core';
import { Ticket } from "../ticket.model";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>()
  detailsVisible = signal(false);
  onCloseTicket = output();

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    // this.detailsVisible.update(value => !value); // another way to toggle the value
  }

  onMarkClosed() {
    this.onCloseTicket.emit(); // emit empty string to close the ticket
  }

}
