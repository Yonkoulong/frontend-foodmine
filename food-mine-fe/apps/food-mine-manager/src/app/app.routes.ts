import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: 'welcome',
        loadChildren: () => import('./food-mine-welcome/food-mine-welcome.module').then((t) => t.FoodMineWelcomeModule)
    },
    {
        path: 'panda',
        loadChildren: () => import('@food-mine-fe/food-mine-client').then((t) => t.FoodMineClientShellModule)
    }, 
    {
        path: '**',
        redirectTo: 'welcome'
    }
];
