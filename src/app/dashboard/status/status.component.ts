import { Component, DestroyRef, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline')
  private interval?: ReturnType<typeof setInterval>;
  constructor(private destroyRef: DestroyRef) {
    effect((onCleanup) => {// hook to run code when signal value changes
      console.log(this.currentStatus())
      onCleanup(() => {
        console.log('cleanup effect');
      })
    });
  }

  ngOnInit() {
    console.log('init');
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.8) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
