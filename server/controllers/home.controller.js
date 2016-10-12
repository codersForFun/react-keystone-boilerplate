import keystone from 'keystone';

const Post = keystone.list('Post');

/**
 * Get all posts
 */
export function getPosts (req, res) {
  Post.model.find()
  .exec((err, posts) => {
    if (err) console.log('ERROR', err);
    console.log('POSTS=====>', posts);
    res.json(posts);
  });
}
