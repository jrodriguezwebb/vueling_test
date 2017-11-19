import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { MainComponent } from './components/stats-comp/main/main.component';
import { ListComponent } from './components/stats-comp/list/list.component';
import { DetailComponent } from './components/stats-comp/detail/detail.component';

const routes: Routes = [
    {
        path        : 'stats',
        component   : MainComponent,
        children    : [
            {
                path        : '',
                redirectTo  : 'list',
                pathMatch   : 'full'
            },
            {
                path        : 'list',
                component   : ListComponent
            },
            {
                path        : 'player/:id',
                component   : DetailComponent
            }
        ]
    }
];

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule
    ]
})

export class StatsRouting {}
