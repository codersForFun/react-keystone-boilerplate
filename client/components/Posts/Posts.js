import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './posts-actions';

class Posts extends Component {
  componentDidMount () {
    this.props.dispatch(fetchPosts());
  }
  componentWillReceiveProps (nextProps) {
    console.log('NEXT', nextProps);
  }

  render () {
    return (
      <div className='posts-wrapper'>
        <h2>List of Posts</h2>
        <ul />
      </div>
    );
  }
}

const { func, object, arrayOf } = PropTypes;

Posts.propTypes = {
  children: object,
  posts: arrayOf(object),
  dispatch: func.isRequired
};

// Actions required to provide data for this component to render in sever side.
Posts.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps (store) {
  return {
    posts: store.posts.posts.data
  };
}

export default connect(mapStateToProps)(Posts);
