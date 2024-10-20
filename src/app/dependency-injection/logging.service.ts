import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // This makes the service available throughout the app without needing to specify it in a providers array.
})
export class LoggingService {
  log(message: string) {
    console.log('LoggingService:', message);
  }
}
