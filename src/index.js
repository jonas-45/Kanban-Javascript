import './styles/main.css';
import likeImage from './images/like-image.png';
import {
  getMeals, getLikes, displayLikes, saveLike, getMealIngridients,
} from './modules/api.js';
import comment from './modules/htmlTemplates.js';
import totalMeals from './modules/mealsCounter';

const getAndDisplayLikes = async () => {
  const likesArray = await getLikes();
  displayLikes(likesArray);
};

// pop up
const displayMealDetails = async (container, mealId) => {
  const allMeals = await getMealIngridients(mealId);

  container.innerHTML = comment(allMeals);
};

const displayMealIngridients = async (container, mealId) => {
  const allMeals = await getMealIngridients(mealId);
  container.innerHTML = comment(allMeals);
};

const addClickListernersToLikeBtns = async () => {
  const likeImgBtns = document.querySelectorAll('.like-image');
  Array.from(likeImgBtns).forEach((imgBtn) => {
    imgBtn.addEventListener('click', (e) => {
      const itemId = {
        item_id: e.target.getAttribute('data-index'),
      };

      if (saveLike(itemId)) {
        const likes = parseInt(e.target.parentNode.nextElementSibling.innerText, 10) + 1;
        e.target.parentNode.nextElementSibling.innerHTML = `${likes} Likes`;
      }
    });
  });
};

const popupPage = async () => {
  const commentBtns = document.querySelectorAll('.comment-button');
  Array.from(commentBtns).forEach(async (btn) => {
    btn.addEventListener('click', (e) => {
      const popupContainer = document.getElementById('pop-up');
      const details = document.getElementById('display-details');
      displayMealDetails(details, e.target.getAttribute('data-id'));
      displayMealIngridients(details, e.target.getAttribute('data-id'));
      popupContainer.style.display = 'flex';
      popupContainer.style.position = 'fixed';
      // console.log(displayMealDetails)
    });
  });
};

const displayMealsCounter = async (mealsArr) => {
  const mealsTotal = await totalMeals(mealsArr);
  document.querySelector('.total-meals').innerHTML = `Total Meals: (${mealsTotal})`;
};

const displayMeals = async () => {
  const displayContainer = document.querySelector('.display-meals');

  const getAllMeals = await getMeals();
  document.querySelector('.total-meals').style.display = 'block';
  let mealsHtml = '';
  getAllMeals.forEach((meal) => {
    mealsHtml += `<div class="card">
    <img class="meal-image" src="${meal.strMealThumb}/preview" alt="meal image">
    <div class="meal-data">
      <label>${meal.strMeal}</label>
      <img class="like-image" data-index="${meal.idMeal}" src="${likeImage}" alt="like meal button">
    </div>
    <p class="likes-text" id="${meal.idMeal}">loading...</p>
    <button type="button" data-id="${meal.idMeal}" class="comment-button">Comments</button>
  </div>`;
  });

  displayContainer.innerHTML = mealsHtml;
  displayMealsCounter(getAllMeals);
  getAndDisplayLikes();
  addClickListernersToLikeBtns();
  popupPage();
};

displayMeals();
