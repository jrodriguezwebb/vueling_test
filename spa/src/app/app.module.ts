import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatsModule } from './modules/stats/stats.module';

// Routing
import { routing } from './app.routing';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    StatsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
