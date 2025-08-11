import {
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  name = input.required<string>();

  // @ContentChild('input') private control?: ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>;
  private control = contentChild.required<ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>>('input');
  // constructor(private el: ElementRef) {
  // }

  onClick() {
    console.log('clicked');
    // console.log(this.control);
    console.log(this.control());
    // console.log(this.el);
  }
}
