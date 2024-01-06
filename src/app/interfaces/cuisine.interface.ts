// src/app/interfaces/cuisine.interface.ts

export interface Cuisine {
  UniqueId: string;
  Title: string;
  Subtitle: string;
  GroupImagePath: string;
}

export interface Dish {
  UniqueId: string;
  Title: string;
  Subtitle: string;
  Description: string;
  Ingredients: string[];
  PreparationTime: number;
  Rating: number;
  TileImagePath: string;
}
