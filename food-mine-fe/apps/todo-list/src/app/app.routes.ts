import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todo-app',
    },
    {
        path: 'todo-app',
        loadChildren: () => import('@food-mine-fe/todo-list-ds-core-ang').then((t) => t.TodoJourneyModule)
    },
    {
        path: '**',
        redirectTo: 'todo-app'
    }
];
