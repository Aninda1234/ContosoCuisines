// src/app/pages/cuisine-group/cuisine-group.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineService } from '../../services/cuisine.service';
import { Cuisine, Dish } from '../../interfaces/cuisine.interface';

@Component({
  selector: 'app-cuisine-group',
  templateUrl: './cuisine-group.component.html',
  styleUrls: ['./cuisine-group.component.css'],
})
export class CuisineGroupComponent implements OnInit {
  cuisine: Cuisine | undefined;
  dishes: Dish[] = [];
  router: any;

  constructor(private route: ActivatedRoute, private cuisineService: CuisineService) {}

  ngOnInit(): void {
    const cuisineId = this.route.snapshot.paramMap.get('id');
    // const cuisineId = this.route.snapshot.params['id']; // use this if the params value doesn't change in component lifecycle 

    if (cuisineId) {
      this.cuisineService.getCuisineById(cuisineId).subscribe(
        (cuisine: Cuisine | undefined) => {
          if (cuisine) {
            this.cuisine = cuisine;
          } else {
            console.error('Cuisine not found.');
            // Handle the case where cuisine is undefined, e.g., redirect to an error page
          }
        },
        (error) => {
          console.error('Error loading cuisine details:', error);
        }
      );

      this.cuisineService.getDishesByCuisine(cuisineId).subscribe(
        (dishes: Dish[]) => {
          this.dishes = dishes;
        },
        (error) => {
          console.error('Error loading dishes:', error);
        }
      );
    } else {
      console.error('Invalid cuisineId (null).');
      // Handle the case where cuisineId is null, e.g., redirect to an error page
    }
  }

}


    