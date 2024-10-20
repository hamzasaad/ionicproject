import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internationalization',
  templateUrl: './internationalization.page.html',
  styleUrls: ['./internationalization.page.scss'],
})
export class InternationalizationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'What is Internationalization in Angular?';
  description = 'Internationalization (i18n) in Angular refers to the process of designing and developing an application that can be adapted to various languages and regions without requiring changes to the source code.';

  importanceList = [
    'Makes applications accessible to a wider audience.',
    'Improves user experience by providing content in the user’s preferred language.',
    'Increases user engagement and satisfaction.',
    'Facilitates compliance with local regulations and standards.'
  ];

  strategies = [
    'Use Angular’s built-in i18n support for translations.',
    'Leverage the `ngx-translate` library for dynamic translations.',
    'Use locale files to manage translations for different languages.',
    'Implement language switching capabilities in the application.'
  ];

  bestPractices = 'Keep translations up to date, use consistent terminology, and ensure proper formatting for dates, currencies, and numbers. Regularly test your application in all supported languages to catch any issues.';
}
