import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import rootSaga from './sagas';

// for redux dev tools
const composeEnhancers = typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: ['TOGGLE_TOPBAR'],
    }) : compose;


const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares =  [sagaMiddleware, routeMiddleware];

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer,
    }),
    // compose(applyMiddleware(...middlewares)),

    // for redux dev tools
    composeEnhancers(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);
export { store, history };
