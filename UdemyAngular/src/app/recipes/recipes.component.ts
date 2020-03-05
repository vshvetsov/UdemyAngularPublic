import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  private subscription: Subscription;
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){    
  }
}
