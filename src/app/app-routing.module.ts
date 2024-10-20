import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsPageModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then(m => m.PipesPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesPageModule)
  },
  {
    path: 'guards',
    loadChildren: () => import('./guards/guards.module').then( m => m.GuardsPageModule)
  },
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.module').then( m => m.RoutingPageModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('./observables/observables.module').then( m => m.ObservablesPageModule)
  },
  {
    path: 'dependency-injection',
    loadChildren: () => import('./dependency-injection/dependency-injection.module').then( m => m.DependencyInjectionPageModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then( m => m.DirectivesPageModule)
  },
  {
    path: 'http-client',
    loadChildren: () => import('./htttp-client/htttp-client.module').then( m => m.HtttpClientPageModule)
  },
  {
    path: 'state-management',
    loadChildren: () => import('./state-management/state-management.module').then( m => m.StateManagementPageModule)
  },
  {
    path: 'testing',
    loadChildren: () => import('./testing/testing.module').then( m => m.TestingPageModule)
  },
  {
    path: 'animations',
    loadChildren: () => import('./animations/animations.module').then( m => m.AnimationsPageModule)
  },
  {
    path: 'performance-optimization',
    loadChildren: () => import('./performance-optimization/performance-optimization.module').then( m => m.PerformanceOptimizationPageModule)
  },
  {
    path: 'internationalization',
    loadChildren: () => import('./internationalization/internationalization.module').then( m => m.InternationalizationPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
