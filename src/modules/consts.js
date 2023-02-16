let id;
const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const GETMEAL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const BY_ID = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const LIKES_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/likes';
const POST_COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/comments';
const GET_COMMENTS_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vehS1XVjnLmMzjCWvntO/comments?item_id=';
export {
  API_URL, LIKES_URL, BY_ID, GETMEAL,POST_COMMENTS_URL,GET_COMMENTS_URL
};