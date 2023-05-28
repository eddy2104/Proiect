import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id ==id)!;
  }

  getAllTags(): Tag[]{

        return[
          {name: 'eggs' , count: 1},
          {name: 'soy sauce' , count: 1},
          {name: 'healthy' ,count: 2},
          {name: 'vegan' ,count: 1},
          {name: 'Raspberry' ,count: 1},
          {name: 'sweat' ,count: 2},
          {name: 'Brunch' ,count: 1},
          {name: 'fish' ,count: 1},
          {name: 'wine' ,count: 1},
          {name: 'bananas' ,count: 1},
          {name: 'syroup' ,count: 2},
          {name: 'pizza' ,count: 1},
          {name: 'nuts' ,count: 1},
          {name: 'olives' ,count: 1},
          {name: 'fruits' ,count: 1},
        ]
  }

  getAllFoodsByTag(tag: string): Food[]{
    if(tag=='All')
    return this.getAll();
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[]{
    return[
      {
        id:1,
        name:'Salad',
        price:30,
        cookTime:'15-20',
        favorite:false,
        origins:['China'],
        imageUrl:'\assets\images\foods\image1.jpg',
        tags:['eggs','soy sauce','beans']
      },
      {
        id:2,
        name:'Salad',
        price:35,
        cookTime:'15-20',
        favorite:false,
        origins:[''],
        imageUrl:'src\assets\images\foods\image2.jpg',
        tags:['healthy','vegan']
      },
      {
        id:3,
        name:'Raspberry Cake',
        price:25,
        cookTime:'20-30',
        favorite:false,
        origins:[''],
        imageUrl:'src\assets\images\foods\image3.jpg',
        tags:['Raspberry','sweat']
      },
      {
        id:4,
        name:'Brunch',
        price:40,
        cookTime:'15-20',
        favorite:false,
        origins:[''],
        imageUrl:'src\assets\images\foods\image4.jpg',
        tags:['Brunch','healthy']
      },
      {
        id:5,
        name:'Salmon',
        price:35,
        cookTime:'20-30',
        favorite:false,
        origins:[''],
        imageUrl:'src\assets\images\foods\image5.jpg',
        tags:['fish','wine']
      },
      {
        id:6,
        name:'Pancakes',
        price:30,
        cookTime:'15-20',
        favorite:false,
        origins:['U.S.A'],
        imageUrl:'src\assets\images\foods\image6.jpg',
        tags:['bananas','syroup']
      },
      {
        id:7,
        name:'Pizza',
        price:30,
        cookTime:'15-20',
        favorite:false,
        origins:['Italy'],
        imageUrl:'src\assets\images\foods\image7.jpg',
        tags:['pizza']
      },
      {
        id:8,
        name:'Salad',
        price:30,
        cookTime:'15-20',
        favorite:false,
        origins:['Philippines'],
        imageUrl:'src\assets\images\foods\image8.jpg',
        tags:['nuts','olives',]
      },
      {
        id:9,
        name:'Toast',
        price:30,
        cookTime:'15-20',
        favorite:false,
        origins:['France'],
        imageUrl:'src\assets\images\foods\image9.jpg',
        tags:['fruits','syroup','sweat']
      },
    ]
  }
}
