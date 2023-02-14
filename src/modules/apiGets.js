import {API_URL, LIKES_URL} from './consts';

const getMeals = async () => {
  const mealsArr = await fetch(API_URL)
    .then((resp) => resp.json())
    .catch((error) => error);

  return mealsArr.meals;
};

const getLikes = async () => {
  const likes = await fetch(LIKES_URL)
    .then(res => res.json);

    return likes;
}

export {getMeals, getLikes};