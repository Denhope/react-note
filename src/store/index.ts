import thunk from 'redux-thunk';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
