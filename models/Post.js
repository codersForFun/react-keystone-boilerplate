const keystone = require('keystone');

/**
 * Post Model
 * ==========
 */

const Post = new keystone.List('Post');

Post.add({
  name: { type: String, required: true }
});


/**
 * Registration
 */

Post.defaultColumns = 'name';
Post.register();
