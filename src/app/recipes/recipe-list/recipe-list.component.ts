import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component ({
    selector: 'app-recipe-list',
    templateUrl: 'recipe-list.component.html',
    styleUrls: ['recipe-list.component.css'],
})

export class RecipeList {
    recipes: Recipe[] = [
        new Recipe('A test recipe', 'Just a test', 'https://picsum.photos/200'),
        new Recipe('Second recipe', 'Just another test', 'https://picsum.photos/200'),
        new Recipe('Third recipe', 'It works!', 'https://picsum.photos/200'),
        new Recipe('A test recipe', 'Just a test', 'https://picsum.photos/200'),
        new Recipe('Second recipe', 'Just another test', 'https://picsum.photos/200'),
        new Recipe('Third recipe', 'It works!', 'https://picsum.photos/200')
    ];

    constructor (){

    }
}