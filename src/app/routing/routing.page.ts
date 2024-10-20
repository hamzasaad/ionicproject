import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.page.html',
  styleUrls: ['./routing.page.scss'],
})
export class RoutingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Understanding Angular Routing';

  description: string = `Routing in Angular allows navigation between different components and pages in a single-page application (SPA). 
  It helps organize the app into logical routes that can be activated based on user interaction.`;

  whenToUse: string[] = [
    'To enable navigation between different views or components',
    'To structure large applications with separate routes for each feature',
    'To allow deep linking and bookmarking of specific application states',
    'To handle lazy loading of modules based on user navigation',
  ];

  howRoutingWorks: string = `Angular routing works by defining routes in a routing module. Each route is associated with a component, 
  and when the URL matches a specific route, the corresponding component is displayed. RouterLink directives are used in templates to navigate between routes.`;

  codeSnippet: string = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }`;

}
