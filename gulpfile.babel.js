import gulp from 'gulp';
import rename from 'gulp-rename';
import awspublish from 'gulp-awspublish';

const config = {
  pkg: require('./package.json'),
  aws: require('./aws-keys.json')
};

// AWS publisher
gulp.task('publish', (cb) => {
  const publisher = awspublish.create({
    params: {
      Bucket: config.pkg.bucket,
      Region: config.pkg.bucketRegion
    },
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccessKey
  });

  const headers = {
    CacheControl: 'max-age=630720000, public',
    Expires: new Date(Date.now() + 63072000000)
  };

  gulp.src('./dist/**/*')
    .pipe(rename((path) => {
      path.dirname = `${config.pkg.bucketPath}/${path.dirname}`;
    }))
    .pipe(awspublish.gzip())
    .pipe(publisher.publish(headers))
    .pipe(publisher.cache())
    .pipe(awspublish.reporter())
    .on('end', cb);
});
