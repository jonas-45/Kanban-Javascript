import './styles/main.css';
import likeImage from './images/like-image.png';
import {
  getMeals, getLikes, displayLikes, saveLike
} from './modules/api';
import comment from './modules/htmlTemplates';


const popupPage = async () => {
  const commentBtns = document.querySelectorAll(".comment-button");
  Array.from(commentBtns).forEach(async (btn) => {
    btn.addEventListener("click", (e) =>{
      const popupContainer = document.getElementById("pop-up");
      const details = document.getElementById("display-details");
      displayMealDetails(details, e.target.getAttribute("data-id"));
      popupContainer.style.display = 'flex';
      popupContainer.style.position = "fixed";
      // console.log(displayMealDetails)
    });
  })
}


const getAndDisplayLikes = async () => {
  const likesArray = await getLikes();
  displayLikes(likesArray);
};

const addClickListernersToLikeBtns = async () => {
  const likeImgBtns = document.querySelectorAll('.like-image');
  Array.from(likeImgBtns).forEach((imgBtn) => {
    imgBtn.addEventListener('click', (e) => {
      const itemId = {
        item_id: e.target.getAttribute('data-index'),
      };

      if (saveLike(itemId)) {
        const likes = parseInt(e.target.parentNode.nextElementSibling.innerHTML[0], 10) + 1;
        e.target.parentNode.nextElementSibling.innerHTML = `${likes} Likes`;
      }
    });
  });
};

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
    <button type="button" data-id="${meal.idMeal}" class="comment-button">Comments</button>
  </div>`;
  });

  displayContainer.innerHTML = mealsHtml;
  getAndDisplayLikes();
  addClickListernersToLikeBtns();
  popupPage();
};


const displayMealDetails = async(container, mealId) => {
  const allMeals = await getMeals();
  const meal = await allMeals.find((meal) => meal.idMeal === mealId);
  console.log('clicked meal:', meal);
  console.log(allMeals)
  container.innerHTML = comment(meal);
}

displayMeals();


