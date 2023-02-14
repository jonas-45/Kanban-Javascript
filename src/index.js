import './styles/main.css';
import likeImage from './images/like-image.png'
import getMeals from './modules/getMeals';

const displayMeals = async () => {
  
  let displayContainer = document.querySelector('.display-meals');
  displayContainer.innerHTML = "";

  const getAllMeals = await getMeals();
  console.log(getAllMeals);
  getAllMeals.forEach(meal => {
    displayContainer += `<div class="card">
    <img class="meal-image" src="${meal.strMealThumb}/preview" alt="meal image">
    <div class="meal-data">
      <label>${meal.strMeal}</label>
      <img class="like-image" src="${likeImage}" alt="like meal button">
    </div>
    <p class="likes-text">5 likes</p>
    <button type="button" class="comment-button">Comments</button>
  </div>`;
  });
}

displayMeals();
