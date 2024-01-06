// src/app/pages/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CuisineService } from '../../services/cuisine.service';
import { Cuisine } from '../../interfaces/cuisine.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cuisines$: Observable<Cuisine[]> | undefined; // Use Observable here
  router: any;

  constructor(private cuisineService: CuisineService) {}

  ngOnInit(): void {
    this.cuisines$ = this.cuisineService.getCuisines(); // Assign the Observable
    console.log(this.cuisines$); 
  }
  
  navigateToGroup(cuisineId: string): void {
    this.router.navigate(['/group', cuisineId]);
  }
  
  // cuisines: Cuisine[] = [];

  // constructor(private cuisineService: CuisineService) {}

  // ngOnInit(): void {
  //   this.cuisines = this.cuisineService.getCuisines();
  // }
}
