import { Routes } from '@angular/router';
import { VerificadorComponent } from './components/verificador/verificador.component';
import { InputComponent } from './components/input/input.component';

export const routes: Routes = [

    {
        path: '',
        component: VerificadorComponent
    },
    {
        path: 'input',
        component: InputComponent
    }
];


