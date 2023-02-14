import API_URL from './consts';

const getMeals = async () => {
  const mealsArr = await fetch(API_URL)
    .then((resp) => resp.json())
    .catch((error) => error);

  return mealsArr.meals;
};

export default getMeals;