import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './teams/teams.component'

export const routes: Routes = [
    { path: 'teams', component: TeamsComponent }, 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);