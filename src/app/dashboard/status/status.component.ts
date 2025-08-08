import { Component, DestroyRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent implements OnInit, OnDestroy {
  currentStatus:'online' | 'offline' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>;
  constructor(private destroyRef: DestroyRef) {}

  ngOnInit() {
    console.log('init');
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.8) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); // Simulate a status update every 5 seconds

    // this.destroyRef.onDestroy(() => {
    //   clearInterval(interval) //interval should be used instead of this.interval if you want to use the destroyRef
    // })
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngOnDestroy() {
    console.log('destroy');
    clearTimeout(this.interval)
  }
}
