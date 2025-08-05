import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { StatusComponent } from "./dashboard/status/status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { SupportTicketsComponent } from "./dashboard/support-tickets/support-tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    StatusComponent,
    TrafficComponent,
    SupportTicketsComponent
  ]
})
export class AppComponent {
}
