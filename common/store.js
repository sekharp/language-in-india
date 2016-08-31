import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import createReducer from './createReducer'
import {ReduxTaxiMiddleware, PromiseMiddleware} from 'redux-taxi';

export function configureStore (initialState, instance = {}) {
  let middleware

  if (instance.reduxTaxi) {
    middleware = compose(
      applyMiddleware(
        ReduxTaxiMiddleware(instance.reduxTaxi),
        PromiseMiddleware,
        thunk.withExtraArgument({ axios })
      ),
      process.env.NODE_ENV === 'development' &&
      typeof window === 'object' &&
      typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
      )
  } else {
    middleware = compose(
      applyMiddleware(
        PromiseMiddleware,
        thunk.withExtraArgument({ axios })
      ),
        process.env.NODE_ENV === 'development' &&
        typeof window === 'object' &&
        typeof window.devToolsExtension !== 'undefined'
          ? window.devToolsExtension()
          : f => f
      )
  }
  let store = createStore(createReducer(), initialState, middleware)

  store.asyncReducers = {}

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./createReducer', () => store.replaceReducer(require('./createReducer').default))
    }
  }

  return store
}

export function injectAsyncReducer (store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(createReducer(store.asyncReducers))
}
