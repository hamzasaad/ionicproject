import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.page.html',
  styleUrls: ['./animations.page.scss'],
})
export class AnimationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'What are Animations in Angular?';
  description = 'Animations in Angular are a way to enhance user experience by adding visual effects to your application. They help in providing feedback to users and make the application feel more dynamic and responsive.';

  importanceList = [
    'Improves user experience by providing visual feedback.',
    'Attracts user attention to specific elements.',
    'Creates a more interactive and engaging application.',
    'Can help illustrate changes in data or states effectively.'
  ];

  usageDescription = 'To use animations in Angular, you can utilize the Angular Animation module, which provides a rich set of tools to create animations for components and elements. You will typically import `BrowserAnimationsModule` and define your animations in the component decorators.';

  simpleAnimationExample = `
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]
})
export class ExampleComponent {}
`;
}
