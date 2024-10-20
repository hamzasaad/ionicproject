import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.page.html',
  styleUrls: ['./state-management.page.scss'],
})
export class StateManagementPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'What is State Management?';
  description = 'State management refers to managing the state of an application, which includes data that drives the user interface, settings, and user information.';

  importanceList = [
    'Consistency: Ensures the UI reflects the current application state.',
    'Predictability: Makes the application more predictable in terms of data flow.',
    'Debugging: Simplifies debugging processes.',
    'Performance: Optimizes performance by minimizing unnecessary data fetching.'
  ];

  workingDescription = 'State management can be implemented using services, reactive programming, or state management libraries like NgRx, Akita, and NGXS.';

  concepts = [
    'Store: A single source of truth that holds the application state.',
    'Actions: Dispatched to indicate that something has happened.',
    'Reducers: Functions that determine how the state changes in response to actions.',
    'Selectors: Functions that allow components to retrieve specific slices of state.'
  ];
}
