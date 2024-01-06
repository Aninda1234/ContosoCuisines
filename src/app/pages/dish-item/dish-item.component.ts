// src/app/pages/dish-item/dish-item.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuisineService } from '../../services/cuisine.service';
import { Dish } from '../../interfaces/cuisine.interface';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {
  dish: Dish | undefined;

  constructor(private route: ActivatedRoute, private cuisineService: CuisineService) {}

  ngOnInit(): void {
    const dishId = this.route.snapshot.paramMap.get('id');
    // const cuisineId = this.route.snapshot.params['id']; // use this if the params value doesn't change in component lifecycle 

    if (dishId) {
      this.cuisineService.getDishById(dishId).subscribe((dish) => {
        this.dish = dish;
      });
    }
  }
}
