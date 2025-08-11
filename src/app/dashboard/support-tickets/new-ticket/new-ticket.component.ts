import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit, output,
  Signal,
  viewChild,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";
import { Ticket } from "../ticket.model";

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
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @ViewChildren(ButtonComponent) buttons?: ButtonComponent[]; for multiple items
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //another way to get the form element, gives signal
  addTicket = output<{ title: string, text: string }>()

  onSubmit(title: string, request: string) {

    this.addTicket.emit({title, text: request});
    this.form?.nativeElement.reset();
    // this.form().nativeElement.reset(); // if use signal
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT'); // you have a guarantee that the view items are initialized
    console.log(this.form?.nativeElement);
  }

  ngOnInit() {
    console.log('INIT NEW TICKET COMPONENT');
    console.log(this.form?.nativeElement); // this will be undefined because the view is not initialized yet (not happens with signals, but only with decorators)
  }
}
