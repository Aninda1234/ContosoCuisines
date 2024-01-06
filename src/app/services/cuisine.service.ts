// src/app/services/cuisine.service.ts

import { Injectable } from '@angular/core';
import { Cuisine, Dish } from '../interfaces/cuisine.interface';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CuisineService {

  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  private getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }


  getCuisines(): Observable<Cuisine[]> {
    return this.getData().pipe(
      map((data) =>
        data.Groups.map((group: any) => ({
          UniqueId: group.UniqueId,
          Title: group.Title,
          Subtitle: group.Subtitle,
          GroupImagePath: group.GroupImagePath,
        }))
      )
    );
  }

  getCuisineById(cuisineId: string): Observable<Cuisine | undefined> {
    return this.getData().pipe(
      map((data) => {
        const cuisine = data.Groups.find((group: any) => group.UniqueId === cuisineId);
        return cuisine
          ? {
              UniqueId: cuisine.UniqueId,
              Title: cuisine.Title,
              Subtitle: cuisine.Subtitle,
              GroupImagePath: cuisine.GroupImagePath,
            }
          : undefined;
      })
    );
  }

  getDishesByCuisine(cuisineId: string): Observable<Dish[]> {
    return this.getData().pipe(
      map((data) => {
        const group = data.Groups.find((g: any) => g.UniqueId === cuisineId);
        return group ? this.flattenItems([group]) : [];
      })
    );
  }

  getDishById(dishId: string): Observable<Dish | undefined> {
    return this.getData().pipe(
      map((data) => {
        const flattenedItems = this.flattenItems(data.Groups);
        return flattenedItems.find((dish) => dish.UniqueId === dishId);
      })
    );
  }


  private flattenItems(groups: any[]): Dish[] {
    return groups
      .map((group) => group.Items)
      .flat()
      .map((dish: any) => ({
        UniqueId: dish.UniqueId,
        Title: dish.Title,
        Subtitle: dish.Subtitle,
        Description: dish.Description,
        Ingredients: dish.Ingredients || [],
        PreparationTime: dish.PreparationTime || 0,
        Rating: dish.Rating || 0,
        TileImagePath: dish.TileImagePath,
      }));
  }


  /// Use this later 
  // private groupsData = {
  //   Groups: [
  //     {
  //       UniqueId: 'Group-1',
  //       Title: 'Chinese',
  //       Subtitle: 'Chinese',
  //       GroupImagePath: 'Images/Chinese/chinese_group.png',
  //       Items: [
  //         {
  //           UniqueId: '1000',
  //           Title: 'Steam bun baos',
  //           Subtitle: 'Steam bun baos',
  //           Description: 'Steam bun baos',
  //           Ingredients: [
  //             '600 g Ground pork',
  //             '1 tsp Salt',
  //             // ... other ingredients
  //           ],
  //           PreparationTime: 60,
  //           Rating: 4,
  //           TileImagePath: 'Images/Chinese/Chinese_1_150_C.jpg',
  //         },
  //         {
  //           UniqueId: '1001',
  //           Title: 'Breaded shrimp balls',
  //           Subtitle: 'Breaded shrimp balls',
  //           Description: 'Breaded shrimp balls with hoisin sauce',
  //           Ingredients: [
  //             '8 Shrimp',
  //             '2 pieces of Bread',
  //             // ... other ingredients
  //           ],
  //           PreparationTime: 45,
  //           Rating: 3,
  //           TileImagePath: 'Images/Chinese/Chinese_2_150_C.jpg',
  //         },
  //         // ... other items
  //       ],
  //     },
  //     // ... other groups
  //   ],
  // };

  // getCuisines(): Cuisine[] {
  //   return this.groupsData.Groups.map((group) => ({
  //     UniqueId: group.UniqueId,
  //     Title: group.Title,
  //     Subtitle: group.Subtitle,
  //     GroupImagePath: group.GroupImagePath,
  //   }));
  // }

  // getDishesByCuisine(cuisineId: string): Dish[] | undefined {
  //   const group = this.groupsData.Groups.find((g) => g.UniqueId === cuisineId);
  //   return group?.Items || [];
  // }

  // getDishById(dishId: string): Dish | undefined {
  //   return this.groupsData.Groups
  //     .map((group) => group.Items)
  //     .flat()
  //     .find((dish) => dish.UniqueId === dishId);
  // }
}
