
const comment = (meal) => {
	let results;
	meal.forEach((image) => {
		console.log(image.strMealThumb)
		results = 	`
			<div class="comment-section">
				<div class="image">
					<img
						src="${image.strMealThumb}"
						alt="${image.strMeal}"
						/>
					<div class="close-btn">
						<i class="fa fa-times" aria-hidden="true"></i>
					</div>
				</div>
				
				<div class="namefood">
					<h2>${image.strCategory != '' ? image.strCategory : 'No category'}</h2>
					<p>${image.strMeal}</p>
				</div>
				<div class="food-recipe">
					<h3>Ingredients</h3>
					<div class="ingredients">
				</div>
			</div>
		`
	})

	let newArr = []
	Object.keys((meal[0])).map((item,) => {

		if(item.startsWith("strIng")){
			newArr.push(meal[0][item])
		}
	})
	let cleanArr = newArr.filter(str => str !== "" && str !== null)
	cleanArr.forEach((ingridient) => {
		results += `
		<li>${ingridient}</li>
	`
	})
	meal.forEach((recipe) => {
		results += `
			<div class="description">
			<h2>Recipe</h2>
				<p>${recipe.strInstructions}</p>
			</div>
			<div class="comments">
				<h3>Comments<span>5</span></h3>
				<ul>
					<li> Caren siya </li>
					<li> Caren siya </li>
					<li> Caren siya </li>
				</ul>
			</div>
			<form class="form" id="form">
				<div class="addcomment">Add a comment</div>
				<input type="text" placeholder="Your name " />
				<textarea placeholder="Your Views..." rows="5" cols="20"></textarea>
				<button type="submit" class="btn">Comments</button>
			</form>
			</div>
    `
	})
	
 return results;
}

export default comment;

