import './styles/main.css';
import likeImage from './images/like-image.png';
import getMeals from './modules/apiGets';

const displayMeals = async () => {
  const displayContainer = document.querySelector('.display-meals');

  const getAllMeals = await getMeals();
  let mealsHtml = '';
  getAllMeals.forEach((meal) => {
    mealsHtml += `<div class="card">
    <img class="meal-image" src="${meal.strMealThumb}/preview" alt="meal image">
    <div class="meal-data">
      <label>${meal.strMeal}</label>
      <img class="like-image" src="${likeImage}" alt="like meal button">
    </div>
    <p class="likes-text">loading...</p>
    <button type="button" class="comment-button">Comments</button>
  </div>`;
  });

  displayContainer.innerHTML = mealsHtml;
};

displayMeals();
