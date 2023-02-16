import { API_URL, LIKES_URL, GETMEAL } from './consts.js';

const getMeals = async () => {
  const mealsArr = await fetch(API_URL)
    .then((resp) => resp.json())
    .catch((error) => error);

  return mealsArr.meals;
};

const getMealIngridients = async (id) => {
  const ingredientsArr = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .catch((error) => error);
  return ingredientsArr.meals;
};

const getDetails = async (detailsId) => {
  const mealsDetails = await fetch(GETMEAL + detailsId);
  return mealsDetails.json().meals;
};

const getLikes = async () => {
  const likes = await fetch(LIKES_URL)
    .then((res) => res.json())
    .catch((err) => err);

  return likes;
};

const getItemLikes = (likesArr, itemId) => {
  const likesObj = likesArr.find((itemObj) => itemObj.item_id === itemId);
  return likesObj === undefined ? 0 : likesObj.likes;
};

const displayLikes = (likesArr) => {
  const likesTexts = document.querySelectorAll('.likes-text');
  Array.from(likesTexts).forEach((likesnode) => {
    likesnode.textContent = `${getItemLikes(likesArr, likesnode.getAttribute('id'))} Likes`;
  });
};

const saveLike = async (itemId) => {
  const sendLikeStatus = await fetch(LIKES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemId),
  }).then(() => true)
    .catch(() => false);

  return sendLikeStatus;
};


const sendComment = async (commentObj) => {
  const commentStatus = await fetch(POST_COMMENTS_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commentObj)
  }).then(() => true)
    .catch(() => false);
  return commentStatus;
}

const getComments = async (mealId) => {
  const getUrl = GET_COMMENTS_URL + mealId;
  console.log('Get url: ' + getUrl);
  const comments = await fetch(GET_COMMENTS_URL + mealId)
                  .then(resp => resp.json());
  return comments;
}

export {
  getMeals, getLikes, displayLikes, saveLike, getDetails,
  getMealIngridients,
};
