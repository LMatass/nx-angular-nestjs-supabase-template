import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'authentication',
        loadChildren: () => import('@nx-angular-nest-template/auth-client').then((r) => r.AUTH_ROUTES)
    }
];
