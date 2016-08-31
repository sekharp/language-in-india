import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from '../../constants'
import axios from 'axios'

export function loadPosts () {
  return {
    type: 'LOAD_POSTS',
    promise: axios.get('/api/v0/posts').then(res => res.data)
  }
}

export function loadRepos () {
  return {
    type: 'LOAD_REPOS',
    promise: axios.get('https://api.github.com/users/jaredpalmer/repos').then(res => res.data)
  }
}
