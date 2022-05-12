import {AnyAction, applyMiddleware, CombinedState, compose, createStore, Store, StoreEnhancer} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import rootReducer, {RootState} from "../reducers";

export default function configureStore(preloadedState = {}):
    Store<CombinedState<RootState>> {
    const middlewareEnhancer = composeWithDevTools(
        applyMiddleware(thunkMiddleware),
    );

    const enhancers = [middlewareEnhancer];
    const composedEnhancers: StoreEnhancer = compose(...enhancers);

    return createStore(rootReducer, preloadedState, composedEnhancers);
}

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
