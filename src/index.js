import './styles/main.css';
import likeImage from './images/like-image.png';
import {getMeals, getLikes, displayLikes, saveLike} from './modules/apiGets';

const updateLikesOnPage = async(likesArray) => {
  const likeImgBtns = document.querySelectorAll('.like-image');
  Array.from(likeImgBtns).forEach(imgBtn => {
    imgBtn.addEventListener('click', (e) => {
      const itemId = {
        item_id: e.target.getAttribute('data-index')
      }

      if(saveLike(itemId)) {
        console.log('saved successfully');
        displayLikes(likesArray);
      }
      
    });
  });
}

const displayMeals = async () => {
  const displayContainer = document.querySelector('.display-meals');

  const getAllMeals = await getMeals();
  let mealsHtml = '';
  getAllMeals.forEach((meal) => {
    mealsHtml += `<div class="card">
    <img class="meal-image" src="${meal.strMealThumb}/preview" alt="meal image">
    <div class="meal-data">
      <label>${meal.strMeal}</label>
      <img class="like-image" data-index="${meal.idMeal}" src="${likeImage}" alt="like meal button">
    </div>
    <p class="likes-text" id="${meal.idMeal}">loading...</p>
    <button type="button" id="${meal.idMeal} class="comment-button">Comments</button>
  </div>`;
  });

  displayContainer.innerHTML = mealsHtml;
  const likesArray = await getLikes();
  displayLikes(likesArray);
  updateLikesOnPage(likesArray);
};

displayMeals();
