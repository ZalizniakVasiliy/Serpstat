import {combineReducers} from 'redux';
import ArticlesReducer from './reducer_articles';
import ActiveArticle from './reducer_active_article';

const rootReducer = combineReducers({
    articles: ArticlesReducer,
    activeArticle: ActiveArticle
});

export default rootReducer;