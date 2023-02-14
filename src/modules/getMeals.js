import API_URL from "./consts";

const getMeals = async () => {
  const mealsArr = await fetch(API_URL)
                  .then(resp => resp.json())
                  .catch(error => console.log(error));

  const mealsResult =  await mealsArr.meals;
  return mealsResult
}

export default getMeals;