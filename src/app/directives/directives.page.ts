import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.page.html',
  styleUrls: ['./directives.page.scss'],
})
export class DirectivesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Understanding Angular Directives';
  description: string = `Directives are classes that add additional behavior to elements in your Angular applications. They can change the appearance or behavior of a DOM element.`;
  
  types: string[] = [
    'Component Directives: These directives are used to create components.',
    'Structural Directives: These change the structure of the DOM by adding or removing elements (e.g., *ngIf, *ngFor).',
    'Attribute Directives: These change the appearance or behavior of an element (e.g., ngClass, ngStyle).',
  ];

  codeSnippet: string = `import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}`;
}
