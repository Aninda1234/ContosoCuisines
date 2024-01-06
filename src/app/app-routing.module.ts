// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CuisineGroupComponent } from './pages/cuisine-group/cuisine-group.component';
import { DishItemComponent } from './pages/dish-item/dish-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'group/:id', component: CuisineGroupComponent },
  { path: 'item/:id', component: DishItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
