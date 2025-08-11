import { Component, ElementRef, Signal, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[]; for multiple items
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //another way to get the form element, gives signal
  onSubmit(title: string, request: string) {

    console.log(title, request, this.form);
    console.dir(this.form);
    // this.form?.nativeElement.reset();
    this.form().nativeElement.reset(); // if use signal
  }
}
