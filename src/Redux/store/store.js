import { createStore , applyMiddleware } from 'redux';
import { moviesReducer} from '../Reducer/MoviesReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';

 export const store = createStore(moviesReducer , applyMiddleware(thunk))