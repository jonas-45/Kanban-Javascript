/*eslint-disable*/
const comment = (meal) => {
  let results;
  meal.forEach((image) => {
    results = `<div class="comment-section">
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

  const newArr = [];
  Object.keys((meal[0])).forEach((item) => {
    if (item.startsWith('strIng')) {
      newArr.push(meal[0][item]);
    }
  });
  const cleanArr = newArr.filter((str) => str !== '' && str !== null);
  cleanArr.forEach((ingridient) => {
    results += `
<div class="list-container">
<ul class="ingridient-list">
<li class="list-items">${ingridient}</li></ul>
</div>
`;
  });
  meal.forEach((recipe) => {
    results += `
<div class="description">
<h2>Recipe</h2>
<p>${recipe.strInstructions}</p>
</div>
<div class="comments">
<h3>Comments<span>5</span></h3>
<ul>
<li> Caren siya </li>
<li> Caren siya </li>
<li> Caren siya </li>
</ul>
</div>
<form class="form" id="form">
<div class="addcomment">Add a comment</div>
<input type="text" placeholder="Your name " />
<textarea placeholder="Your Views..." rows="5" cols="20"></textarea>
<button type="submit" class="btn">Comments</button>
</form>
</div>
`;
  });

  return results;
};

export default comment;
