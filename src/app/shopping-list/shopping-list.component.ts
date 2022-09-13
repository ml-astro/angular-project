import { Component } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Component ({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html'
})

export class ShoppingList {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 15),
        new Ingredient('Tomato', 2),
        new Ingredient('Kiwi', 8)
    ];

}