import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'What is Testing in Angular?';
  description = 'Testing is a crucial aspect of software development that ensures your application works as intended. In Angular, testing helps maintain the reliability of components, services, and overall application behavior.';

  importanceList = [
    'Catches bugs early in the development process.',
    'Improves code quality and maintainability.',
    'Facilitates refactoring by ensuring existing functionality remains intact.',
    'Increases confidence in the stability of the application.'
  ];

  testingTypes = [
    'Unit Testing: Testing individual components or services in isolation.',
    'Integration Testing: Testing how different parts of the application work together.',
    'End-to-End Testing: Testing the application flow from start to finish as a user would.'
  ];

  testingDescription = 'In Angular, testing is typically done using frameworks like Jasmine and Karma. Tests are written in separate files and can be run using Angular CLI commands.';

  simpleTestExample = `
describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
`;

}
