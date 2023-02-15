import './styles/main.css';
import likeImage from './images/like-image.png';
import {
  getMeals, getLikes, displayLikes, saveLike,
} from './modules/api';



const popupPage = async () => {
  const commentBtns = document.querySelectorAll(".comment-button");
  Array.from(commentBtns).forEach(async (btn) => {
    btn.addEventListener("click", () =>{
      const popupContainer = document.getElementById("pop-up");
      popupContainer.style.display = 'block';
      alert("Hello")
    });
    
    // const mealID = btn.getAttribute('data-id');
    // await meal.getMealById(mealID).then((meal) =>{
    //   popupContainer.innerHTML = comment(meal.meals[0]);
    // });
    // document.querySelector(".close-Button").onclick = () => {
    //   popupContainer.innerHTML = ''
    // }
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
};
popupPage()
displayMeals();


