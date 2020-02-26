import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'a test recipe 1', 
            'Some description 1', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/7-up_Logo.svg/2000px-7-up_Logo.svg.png'),
        new Recipe(
            'a test recipe 2', 
            'Some description 2', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/7-up_Logo.svg/2000px-7-up_Logo.svg.png')];
    
    getRecipes() {
        return this.recipes.slice();
    }
}