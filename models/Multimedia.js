const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Multimedia Model
 * ==========
 */

const Multimedia = new keystone.List('Multimedia');

const storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: 's3-key', // required; defaults to process.env.S3_KEY
    secret: 'secret', // required; defaults to process.env.S3_SECRET
    bucket: 'mybucket', // required; defaults to process.env.S3_BUCKET
    path: '/profilepics',
    headers: {
      'x-amz-acl': 'public-read' // add default headers; see below for details
    }
  },
  schema: {
    bucket: true, // optional; store the bucket the file was uploaded to in your db
    etag: true, // optional; store the etag for the resource
    path: true, // optional; store the path of the file in your db
    url: true // optional; generate & store a public URL
  }
});

Multimedia.add({
  name: { type: String },
  file: { type: Types.File, storage: storage }
});

/**
 * Registration
 */

Multimedia.defaultColumns = 'name';
Multimedia.register();
