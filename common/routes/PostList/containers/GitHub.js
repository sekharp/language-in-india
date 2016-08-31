import React, { PropTypes } from 'react'
import { registerAsyncActions } from 'redux-taxi'
import { loadRepos } from '../actions'
import { connect } from 'react-redux'
import PostListItem from '../components/PostListItem'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectRepos } from '../reducer'

const mapStateToProps = state => ({
  repos: selectRepos(state)
})

class GitHub extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.props.loadRepos()
  }

  render () {
    const { repos } = this.props
    return (
      <div className={css(styles.root)}>
        <Helmet title='Posts' />
        {repos.isLoading &&
          <div>
            <h2 className={css(styles.title)}>Loading....</h2>
          </div>}
        {!repos.isLoading &&
          repos.data.map((post, i) => <PostListItem key={post.id} post={post} />)}
      </div>
    )
  }
}

GitHub.PropTypes = {
  repos: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 500
  },
  title: {
    fontSize: 28,
    margin: '0 auto 1.5rem',
    color: '#b7b7b7'
  }
})

export default registerAsyncActions('LOAD_REPOS')(connect(mapStateToProps, {loadRepos})(GitHub))
