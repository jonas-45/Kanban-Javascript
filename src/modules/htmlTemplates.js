import close from '../images/close.jpg'
/*eslint-disable*/
const comment = (meal) => {
  let results;
  meal.forEach((image) => {
    results = `<img class="close-popup" src="${close}" alt="popup close button"/>
<div class="image"><img
src="${image.strMealThumb}"
alt="${image.strMeal}"/>
</div>	
<div class="namefood">
<p>${image.strMeal}</p>
<h2 class="title">${image.strCategory !== '' ? image.strCategory : 'No category'}</h2>
</div>
<div class="food-recipe">
<h3>Ingredients</h3>
<div class="ingredients">
</div>
</div>
`;
  });
    results += `
<div class="list-container">
<ul class="ingridient-list">
</ul>
</div>
`;
  meal.forEach((recipe) => {
    results += `
<div class="description">
<h2>Recipe</h2>
<p>${recipe.strInstructions}</p>
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
  });

  return results;
};

export default comment;
