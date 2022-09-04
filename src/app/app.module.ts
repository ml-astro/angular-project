import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeList } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingList,
    ShoppingEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
