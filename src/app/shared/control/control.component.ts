import {
  AfterContentInit, afterNextRender, afterRender,
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  input, OnInit,
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
export class ControlComponent implements AfterContentInit, OnInit{
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  name = input.required<string>();

  @ContentChild('input') private control?: ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>;
  // private control = contentChild.required<ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>>('input');
  // constructor(private el: ElementRef) {
  // }

  constructor() {
    afterRender(() => {
      console.log('afterRender'); // if anything changes anywhere on the entire angular application, this will be called
    })
    afterNextRender(() => {
      console.log('afterNextRender'); // after the next change anywhere on the entire angular application, this will be called
    })
  }
  onClick() {
    console.log('clicked');
    console.log(this.control);
    // console.log(this.control());
    // console.log(this.el);
  }

  ngOnInit() {
    console.log('ngOnInit ControlComponent');
    console.log(this.control?.nativeElement);
    // console.log(this.control());
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log(this.control?.nativeElement);
    // console.log(this.control());
  }
}
