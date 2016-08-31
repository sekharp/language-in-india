import * as types from '../../constants'
import { fromJS } from 'immutable'
import { combineReducers } from 'redux'

const initialState = fromJS({
  data: fromJS([]),
  isLoading: false,
  error: null
})

export const posts = (state = initialState, action) => {
  if (action.type === 'LOAD_POSTS') {
    switch (action.sequence.type) {
      case 'START':
        return state.set('isLoading', true)
                    .set('error', null)
      case 'DONE':
        return state.set('isLoading', false)
                    .set('error', null)
                    .set('data', fromJS(action.payload))
      default:
        return state
    }
  } else if (action.error) {
    return state.set('isLoading', false)
                .set('error', fromJS(actions.payload))
  } else {
    return state
  }
}

export const repos = (state = initialState, action) => {
  if (action.type === 'LOAD_REPOS') {
    switch (action.sequence.type) {
      case 'START':
        return state.set('isLoading', true)
                    .set('error', null)
      case 'DONE':
        return state.set('isLoading', false)
                    .set('error', null)
                    .set('data', fromJS(action.payload))
      default:
        return state
    }
  } else if (action.error) {
    return state.set('isLoading', false)
                .set('error', fromJS(actions.payload))
  } else {
    return state
  }
}

export default combineReducers({
  posts,
  repos
})


// Example of a co-located selector
export const selectPosts = state => state.get('posts').toJS()
export const selectRepos = state => state.get('repos').toJS()
