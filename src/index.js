import './styles/main.css';
import loading from './images/loading.gif';
import likeImage from './images/like-image.png';
import {
  getMeals, getLikes, displayLikes, saveLike, getMealIngridients,
  sendComment, getComments,
} from './modules/api.js';
import getTotalComment from './modules/commentCountapi.js';
import comment from './modules/htmlTemplates.js';
import totalMeals from './modules/mealsCounter.js';

const getAndDisplayLikes = async () => {
  const likesArray = await getLikes();
  displayLikes(likesArray);
};

const showLoading = () => {
  const img = document.createElement('img');
  img.src = loading;
  img.alt = 'Loading image';
  document.querySelector('.loading-div').appendChild(img);
};

const displayComments = async (mealId) => {
  const commentsArr = await getComments(mealId);
  document.querySelector('.comments-count').innerText = getTotalComment(commentsArr);
  const ul = document.querySelector('.comments-list');
  const noComments = document.querySelector('.no-comments');
  if (commentsArr.length > 0) {
    noComments.classList.add('hide');
    ul.innerHTML = '';
    commentsArr.forEach((comment) => {
      if (Object.keys(comment.comment).length !== 0) {
        const li = document.createElement('li');
        li.innerText = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        ul.appendChild(li);
      }
    });

    return;
  }

  noComments.innerText = 'No comments available';
};

const addCommentButtonListener = async (mealId) => {
  const form = document.getElementById('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const comment = {
      item_id: mealId,
      username: document.getElementById('username').value,
      comment: document.getElementById('comment').value,
    };
    const postComment = await sendComment(comment);
    if (postComment) {
      displayComments(mealId);
    }

    form.reset();
  });
};

// pop up
const displayMealIngridients = async (ul, meal) => {
  const ingredients = [];
  Object.keys((meal[0])).forEach((item) => {
    if (item.startsWith('strIng')) {
      ingredients.push(meal[0][item]);
    }
  });
  const cleanArr = ingredients.filter((str) => str !== '' && str !== null);
  cleanArr.forEach((ingridient) => {
    const li = document.createElement('li');
    li.classList.add('list-items');
    li.innerHTML = ingridient;
    ul.appendChild(li);
  });
};

const displayMealDetails = async (container, mealId) => {
  const allMeals = await getMealIngridients(mealId);
  const meal = await allMeals.find((meal) => meal.idMeal === mealId);
  document.querySelector('body').style.overflow = 'hidden';
  container.innerHTML = comment(allMeals);
  addCommentButtonListener(meal.idMeal);
  displayComments(meal.idMeal);
  const ul = document.querySelector('.ingridient-list');
  displayMealIngridients(ul, allMeals);
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

const removePopupListener = () => {
  document.querySelector('.close-popup').addEventListener('click', () => {
    const popup = document.getElementById('pop-up');
    popup.style.position = 'static';
    popup.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
  });
};

const popupPage = async () => {
  const commentBtns = document.querySelectorAll('.comment-button');
  Array.from(commentBtns).forEach(async (btn) => {
    btn.addEventListener('click', async (e) => {
      const popupContainer = document.getElementById('pop-up');
      const details = document.getElementById('display-details');
      await displayMealDetails(details, e.target.getAttribute('data-id'));
      // await displayMealIngridients(details, e.target.getAttribute('data-id'));
      popupContainer.style.display = 'flex';
      popupContainer.style.position = 'fixed';

      removePopupListener();
    });
  });
};

const displayMealsCounter = async (mealsArr) => {
  const mealsTotal = await totalMeals(mealsArr);
  document.getElementById('Seafood').innerHTML = `Seafood: (${mealsTotal})`;
};

const displayMeals = async () => {
  showLoading();
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

  document.querySelector('.loading-div').style.display = 'none';
  displayContainer.innerHTML = mealsHtml;
  displayMealsCounter(getAllMeals);
  getAndDisplayLikes();
  addClickListernersToLikeBtns();
  popupPage();
};

displayMeals();
