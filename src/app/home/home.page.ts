import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  courses = [
    { id: 1, title: 'Components', description: 'Learn about Angular components and their lifecycle.' },
    { id: 2, title: 'Services', description: 'Understand how to create and use services in Angular.' },
    { id: 3, title: 'Pipes', description: 'Explore how to format data using pipes in Angular.' },
    { id: 4, title: 'Guards', description: 'Learn how to protect your routes using guards.' },
    { id: 5, title: 'Routing', description: 'Master the Angular Router for navigation in your app.' },
    { id: 6, title: 'Forms', description: 'Learn how to manage user input with reactive and template-driven forms.' },
    { id: 7, title: 'Observables', description: 'Understand how to work with observables and the RxJS library.' },
    { id: 8, title: 'Dependency Injection', description: 'Discover how dependency injection works in Angular applications.' },
    { id: 9, title: 'Directives', description: 'Learn about Angular directives and how to create custom directives.' },
    { id: 10, title: 'Http Client', description: 'Understand how to make HTTP requests and handle responses in Angular.' },
    { id: 11, title: 'State Management', description: 'Explore state management solutions like NgRx and Akita.' },
    { id: 12, title: 'Animations', description: 'Add animations to your Angular applications for improved user experience.' },
    { id: 13, title: 'Testing', description: 'Learn how to write unit tests and integration tests for your Angular apps.' },
    { id: 14, title: 'Performance Optimization', description: 'Discover techniques to optimize the performance of your Angular applications.' },
    { id: 15, title: 'Internationalization', description: 'Understand how to localize your Angular applications for multiple languages.' },
    // Add more courses as needed
];
show(course: { title: string }) {
  const courseSlug = course.title.toLowerCase().replace(' ', '-'); // Transform the title
  console.log(courseSlug); // Log the transformed course title
}
}
