function createRecipe() {

  let ingredients = [];
  let ingredientNodes = document.getElementsByName('ingredients');
    for(let key=0; key < ingredientNodes.length; key++)  {
      ingredients.push({"name" : (ingredientNodes[key].value)});
    }
  let name = document.getElementById('name').value;
  let description =  document.getElementById('description').value;

  let recipe = {
    'name': name,
    'description': description,
    'ingredients': ingredients
  }

  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementById("main").innerHTML += result;
}

function updateRecipe() {
  createRecipe();
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  let result = template();
   document.getElementsByName('edit')[0].innerHTML = result;

}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString('<li>' + this.name + '</li>');
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);
}


document.addEventListener("DOMContentLoaded", function(event) {
  init();
})
