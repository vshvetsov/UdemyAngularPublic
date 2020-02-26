import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('a test recipe 1', 'Some description 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/7-up_Logo.svg/2000px-7-up_Logo.svg.png'),
    new Recipe('a test recipe 2', 'Some description 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/7-up_Logo.svg/2000px-7-up_Logo.svg.png')  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
