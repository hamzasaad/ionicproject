import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Understanding Angular Services';

  description: string = `Services in Angular are used to share logic and data across different components. 
  They provide reusable functionalities like data fetching, business logic, and more.`;

  keyFeatures: string[] = [
    'Reusable business logic across components',
    'Dependency Injection system',
    'Shared state and functionality',
    'Encapsulation of data and methods',
  ];
  codeSnippet: string = `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = [];

  getData() {
    return this.data;
  }

  addData(item: any) {
    this.data.push(item);
  }
}`;
}
