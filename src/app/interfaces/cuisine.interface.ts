// src/app/interfaces/cuisine.interface.ts

export interface Cuisine {
  UniqueId: string;
  Title: string;
  Subtitle: string;
  Description: string; 
  ImagePath: string;
  GroupImagePath: string;
  GroupHeaderImagePath: string;
}

export interface Dish {
  UniqueId: string;
  Title: string;
  Subtitle: string;
  Description: string;
  Ingredients: string[];
  PreparationTime: number;
  Content: string;
  Rating: number;
  Favorite: boolean;
  ImagePath: string;
  TileImagePath: string;
}
