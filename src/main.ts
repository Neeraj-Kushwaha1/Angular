import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../src/pages/app/app.config';
import { AppComponent } from '../src/pages/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
