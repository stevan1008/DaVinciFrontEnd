import {Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { DataTableComponent } from '../data-table/data-table.component'


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'datos', component: DataTableComponent },
  { path: '**', redirectTo: "", pathMatch: "full" }
];