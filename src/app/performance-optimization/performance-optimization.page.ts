import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-optimization',
  templateUrl: './performance-optimization.page.html',
  styleUrls: ['./performance-optimization.page.scss'],
})
export class PerformanceOptimizationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'What is Performance Optimization in Angular?';
  description = 'Performance optimization in Angular involves techniques and best practices to ensure that your application runs smoothly and efficiently, providing a better user experience and reducing resource consumption.';

  importanceList = [
    'Enhances user experience by reducing loading times and improving responsiveness.',
    'Reduces server load and resource consumption.',
    'Improves SEO rankings due to faster load times.',
    'Increases user retention and satisfaction.'
  ];

  optimizationStrategies = [
    'Lazy Loading: Load modules only when needed.',
    'Change Detection Strategy: Use OnPush change detection to minimize unnecessary checks.',
    'TrackBy: Use trackBy in ngFor to optimize DOM rendering.',
    'AOT Compilation: Use Ahead-of-Time compilation to reduce runtime processing.',
    'Tree Shaking: Eliminate unused code during build time.'
  ];

  bestPractices = 'Always monitor and profile your application’s performance using tools like Chrome DevTools, Angular DevTools, and Lighthouse. Make optimizations based on data rather than assumptions.';
}
