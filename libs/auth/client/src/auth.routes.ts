import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
    {
        path: '',
        loadComponent: () => import('./lib/authentication/authentication.component').then((c) => c.AuthenticationComponent),
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                loadComponent: () => import('./lib/ui-components/login/login.component').then((c) => c.LoginComponent)
            },
            {
                path: 'signup',
                loadComponent: () => import('./lib/ui-components/signup/signup.component').then((c) => c.SignupComponent)
            }
        ]
    },
    
] 