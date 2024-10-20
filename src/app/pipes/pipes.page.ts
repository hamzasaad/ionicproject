import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.page.html',
  styleUrls: ['./pipes.page.scss'],
})
export class PipesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Understanding Angular Pipes';

  description: string = `Pipes in Angular transform data before displaying it in the view. They are used to format 
  strings, numbers, dates, and other data types within templates.`;

  whenToUse: string[] = [
    'To format data such as currency, dates, or numbers',
    'To apply transformations like uppercasing or lowercasing strings',
    'To filter, sort, or modify arrays and objects within templates',
    'To create reusable data transformations across components',
  ];

  howPipesWork: string = `Pipes can be applied using the pipe symbol (|) in Angular templates. Angular provides several 
  built-in pipes like DatePipe, UpperCasePipe, and CurrencyPipe. You can also create custom pipes for specific needs.`;

  codeSnippet: string = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}`;
}
