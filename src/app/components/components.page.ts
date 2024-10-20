import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
})
export class ComponentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  codeSnippet: string = `
    import { Component } from '@angular/core';
    @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
    })
    export class ExampleComponent {
    title = 'Hello, Angular!';
    }`;
}
