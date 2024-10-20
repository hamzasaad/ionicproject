import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htttp-client',
  templateUrl: './htttp-client.page.html',
  styleUrls: ['./htttp-client.page.scss'],
})
export class HtttpClientPage implements OnInit {

  title: string = 'Understanding Angular HTTP Client';
  description: string = `The Angular HTTP Client is a built-in service that allows you to communicate with backend services over HTTP. It provides a simplified API for making requests and handling responses.`;
  
  methods: string[] = [
    'GET: Fetch data from a server.',
    'POST: Send data to a server.',
    'PUT: Update existing data on a server.',
    'DELETE: Remove data from a server.',
  ];

  exampleCode: string = `import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.apiUrl);
  }
}`;

  data: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.data = response;
      });
  }

}
