import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { StatsRouting } from './stats.routing.module';

// Componentes
import { MainComponent } from './components/stats-comp/main/main.component';
import { ListComponent } from './components/stats-comp/list/list.component';
import { DetailComponent } from './components/stats-comp/detail/detail.component';

// servicios
import { StatsService } from './services/stats.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StatsRouting
  ],
  exports: [
    MainComponent,
    ListComponent,
    DetailComponent
  ],
  declarations: [
    MainComponent,
    ListComponent,
    DetailComponent
  ],
  providers : [
    StatsService
  ]
})
export class StatsModule {}
