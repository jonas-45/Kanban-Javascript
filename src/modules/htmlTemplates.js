import close from '../images/close.jpg';
/*eslint-disable*/
const mealDetail = (meal) => {
  let results;
  //meal.forEach((image) => {
results = `<div class="close-img-container"><img class="close-popup" src="${close}" alt="popup close button"/></div>
<div class="image"><img
src="${meal.strMealThumb}"
alt="${meal.strMeal}"/>
</div>	
<div class="namefood">
<h1>${meal.strMeal}</h1>
</div>
<div class="food-recipe">
<h2>Ingredients</h2>
<hr>
<div class="ingredients">
</div>
</div>
`;
    results += `
<div class="list-container">
<ul class="ingridient-list">
</ul>
</div>
`;
 // meal.forEach((recipe) => {
results += `
<div class="description">
<h2>Recipe</h2>
<hr>
<p class="instructions">${meal.strInstructions}</p>
</div>
<div class="comments">
<h3>Comments<span class="comments-count">wait..</span></h3>
<p class="no-comments">Loading comments...</p>
<ul class="comments-list">

</ul>
</div>
<form class="form" id="form">
<div class="addcomment">Add a comment</div>
<input type="text" class="input" id="username" placeholder="Your name" required/>
<textarea class="input" id="comment" placeholder="Your Views..." rows="5" cols="20" required></textarea>
<button type="submit" class="btn">Comments</button>
</form>
`;
 // });

  return results;
};

export default mealDetail;
