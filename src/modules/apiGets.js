import {API_URL, LIKES_URL} from './consts';

const getMeals = async () => {
  const mealsArr = await fetch(API_URL)
    .then((resp) => resp.json())
    .catch((error) => error);

  return mealsArr.meals;
};

const getLikes = async () => {
  const likes = await fetch(LIKES_URL)
    .then(res => res.json())
    .catch(err => console.log(err));

    return likes;
}

const getItemLikes = (likesArr, itemId) => {
  const likesObj = likesArr.find(itemObj => itemObj.item_id === itemId);
  return likesObj === undefined? 0 : likesObj.likes;
}

const displayLikes = (likesArr) => {
  console.log('display likes is called');
  const likesTexts = document.querySelectorAll('.likes-text');
  Array.from(likesTexts).forEach(likesnode => {
    likesnode.textContent = getItemLikes(likesArr,likesnode.getAttribute('id')) + ' Likes';
  });
}

const saveLike = async(itemId) => {
  const sendLikeStatus = await fetch(LIKES_URL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(itemId)
  }).then(() => true)
    .catch(() => false);

  return sendLikeStatus;
}

export {getMeals, getLikes, displayLikes, saveLike};