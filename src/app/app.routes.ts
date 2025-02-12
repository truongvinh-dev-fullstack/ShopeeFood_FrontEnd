import { Routes } from '@angular/router';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

export const routes: Routes = [
    { path: 'trang-chu', component: TrangChuComponent },
    { path: '', component: TrangChuComponent },
];
