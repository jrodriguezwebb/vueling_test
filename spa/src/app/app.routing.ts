import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path        : '',
        redirectTo  : 'stats',
        pathMatch   : 'full'
    },
    {
        path        : '**',
        component   : PageNotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
