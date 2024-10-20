import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.page.html',
  styleUrls: ['./guards.page.scss'],
})
export class GuardsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'Understanding Angular Guards';

  description: string = `Guards in Angular are used to control access to routes. They allow you to decide whether 
  a route can be activated, deactivated, or loaded based on certain conditions.`;

  whenToUse: string[] = [
    'To restrict access to specific routes based on user roles or authentication status',
    'To prevent users from navigating away from a form without saving changes',
    'To lazy-load modules only when certain conditions are met',
    'To protect sensitive or restricted areas of your application',
  ];

  howGuardsWork: string = `Guards are implemented as services that return a boolean or an observable, which Angular 
  uses to determine whether the route can be accessed. Common guards include CanActivate, CanDeactivate, and CanLoad.`;

  codeSnippet: string = `import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }
}`;

}
