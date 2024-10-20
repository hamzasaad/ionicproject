import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.page.html',
  styleUrls: ['./observables.page.scss'],
})

export class ObservablesPage implements OnInit {
  
  title: string = 'Understanding Angular Observables';
  description: string = `Observables in Angular are used for handling asynchronous data streams. 
  They are part of the RxJS library and are extensively used in Angular, especially when dealing with HTTP requests, real-time updates, and event handling.`;

  whenToUse: string[] = [
    'Handling HTTP requests (e.g., getting data from an API)',
    'Real-time data streams (e.g., WebSocket connections)',
    'Event handling and user interaction',
    'Complex data handling with operators like map, filter, debounce, etc.',
  ];

  howObservablesWork: string = `An Observable emits data over time and can be subscribed to by components to receive the data. 
  Observables are lazy, meaning they don't start emitting data until they are subscribed to.`;
  
  
  observableData$: Observable<string> = new Observable();
  constructor() {}

  ngOnInit() {
    this.observableData$ = of('Data emitted by Observable after 3 seconds').pipe(delay(3000));
  }

  codeSnippet: string = `import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export class SampleComponent implements OnInit {
  data$: Observable<string>;

  ngOnInit() {
    this.data$ = of('Hello Observable!').pipe(delay(2000));
  }
}`;
}
