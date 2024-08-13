import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../src/pages/app/app.component';
import { config } from '../src/pages/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
