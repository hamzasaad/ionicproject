import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.page.html',
  styleUrls: ['./dependency-injection.page.scss'],
})
export class DependencyInjectionPage implements OnInit {

  title: string = 'Understanding Dependency Injection in Angular';
  description: string = `Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), where dependencies are injected into components or services. In Angular, DI makes code more modular, testable, and maintainable.`;

  whyUseDI: string[] = [
    'Decoupling components from their dependencies',
    'Easier to test individual components or services',
    'Makes code reusable and easier to refactor',
    'Manages shared instances efficiently (Singleton pattern)',
  ];

  howItWorks: string = `In Angular, DI allows you to inject services or other dependencies into components, services, or directives. Angular's DI system knows how to create and inject instances of these services.`;

  codeSnippet: string = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log(message: string) {
    console.log('LoggingService:', message);
  }
}

@Component({
  selector: 'app-example',
  template: '<p>Check the console for logs</p>',
})
export class ExampleComponent {
  constructor(private loggingService: LoggingService) {
    this.loggingService.log('ExampleComponent initialized');
  }
}`;

  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    // Example of Dependency Injection in action
    this.loggingService.log('DependencyInjectionPage initialized');
  }

}
